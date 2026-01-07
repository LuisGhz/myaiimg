export type ApiResponse<T> = {
  data: T;
  success: boolean;
  message?: string;
};

export type ApiError = {
  message: string;
  status: number;
  statusCode?: string;
};

export type GenerateImageRequest = {
  prompt: string;
  file?: File;
};

export type GenerateImageResponse = {
  id: string;
  imageUrl: string;
  prompt: string;
  createdAt: string;
};

export type ChatMessageResponse = {
  id: string;
  role: "user" | "assistant";
  prompt: string;
  imageUrl?: string;
  file?: string;
};
