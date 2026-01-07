import { apiClient } from "./api-client";
import type { GenerateImageRequest, GenerateImageResponse } from "./types";

export type ImageGenerationResult = {
  file: File | null;
  key: string;
};

export const chatApi = {
  async generateImage(request: GenerateImageRequest): Promise<ImageGenerationResult> {
    const { prompt, file, model, options } = request;

    // Determine endpoint based on model
    const endpoint = model.startsWith("gpt") ? "/img/openai" : "/img/gemini";

    const response = file
      ? await this.sendWithFile(endpoint, prompt, file, model, options)
      : await apiClient.post<GenerateImageResponse>(endpoint, { prompt, model, options });

    if (!response) {
      return { file: null, key: "" };
    }

    // Convert base64 image to File
    const binaryString = atob(response.image);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const blob = new Blob([bytes], { type: "image/png" });
    const imageFile = new File([blob], "image.png", { type: "image/png" });

    return {
      file: imageFile,
      key: response.key,
    };
  },

  async sendWithFile(
    endpoint: string,
    prompt: string,
    file: File,
    model: string,
    options: Record<string, string>
  ): Promise<GenerateImageResponse> {
    const formData = new FormData();
    formData.append("prompt", prompt);
    formData.append("file", file);
    formData.append("model", model);
    formData.append("options", JSON.stringify(options));

    return apiClient.postFormData<GenerateImageResponse>(endpoint, formData);
  },
};
