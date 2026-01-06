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
  setPrompt: (prompt: string) => void;
  setPromptFile: (file: File | null) => void;
  addMessage: (message: ChatMessage) => void;
  clearMessages: () => void;
};
