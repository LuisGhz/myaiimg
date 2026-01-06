import { create } from "zustand";
import type { ChatMessage, ChatStoreType } from "./chat-store.type";

export const useChatStore = create<ChatStoreType>((set) => ({
  prompt: "",
  promptFile: null,
  messages: [],
  setPrompt: (prompt: string) => set({ prompt }),
  setPromptFile: (file: File | null) => set({ promptFile: file }),
  addMessage: (message: ChatMessage) =>
    set((state) => ({ messages: [...state.messages, message] })),
  clearMessages: () => set({ messages: [] }),
}));
