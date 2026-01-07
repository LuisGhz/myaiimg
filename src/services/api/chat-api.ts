import { apiClient } from "./api-client";
import type { GenerateImageRequest, ChatMessageResponse } from "./types";

export const chatApi = {
  async generateImage(request: GenerateImageRequest): Promise<ChatMessageResponse> {
    const { prompt, file } = request;

    if (file) {
      const formData = new FormData();
      formData.append("prompt", prompt);
      formData.append("file", file);

      return apiClient.postFormData<ChatMessageResponse>("/chat/generate", formData);
    }

    return apiClient.post<ChatMessageResponse>("/chat/generate", { prompt });
  },
};
