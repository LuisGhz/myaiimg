export type ChatMessage = {
  id?: string;
  prompt: string;
  role: "user" | "assistant";
  file?: string | File;
};

export type ChatStoreType = {
  prompt: string;
  promptFile: File | null;
  messages: ChatMessage[];
  loading: boolean;
  error: string | null;
  setPrompt: (prompt: string) => void;
  setPromptFile: (file: File | null) => void;
  addMessage: (message: ChatMessage) => void;
  clearMessages: () => void;
  sendPrompt: (prompt: string, file?: File | null) => Promise<void>;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
};
