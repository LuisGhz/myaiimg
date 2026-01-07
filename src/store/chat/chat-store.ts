import { create } from "zustand";
import type { ChatMessage, ChatStoreType } from "./chat-store.type";
import { chatApi } from "@/services";

export const useChatStore = create<ChatStoreType>((set) => ({
  prompt: "",
  promptFile: null,
  messages: [],
  loading: false,
  error: null,
  setPrompt: (prompt: string) => set({ prompt }),
  setPromptFile: (file: File | null) => set({ promptFile: file }),
  addMessage: (message: ChatMessage) =>
    set((state) => ({ messages: [...state.messages, message] })),
  clearMessages: () => set({ messages: [] }),
  setLoading: (loading: boolean) => set({ loading }),
  setError: (error: string | null) => set({ error }),

  // Async action to send prompt
  sendPrompt: async (prompt: string, file?: File | null) => {
    if (!prompt.trim()) return;

    set({ loading: true, error: null });

    // Add user message
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      prompt,
      file: file || undefined,
    };

    set((state) => ({
      messages: [...state.messages, userMessage],
    }));

    try {
      // Call API
      const response = await chatApi.generateImage({ prompt, file: file || undefined });

      // Add assistant message with response
      const assistantMessage: ChatMessage = {
        id: response.id,
        role: "assistant",
        prompt: response.prompt,
        file: response.imageUrl,
      };

      set((state) => ({
        messages: [...state.messages, assistantMessage],
        loading: false,
      }));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to generate image";
      set({
        error: errorMessage,
        loading: false,
      });

      // Add error message to chat
      const errorChatMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        prompt: `Error: ${errorMessage}`,
      };

      set((state) => ({
        messages: [...state.messages, errorChatMessage],
      }));
    }
  },
}));
