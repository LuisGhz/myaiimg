import { useChatStore } from "@st/chat/chat-store";

export const useChat = () => {
  const prompt = useChatStore((state) => state.prompt);
  const promptFile = useChatStore((state) => state.promptFile);
  const setPrompt = useChatStore((state) => state.setPrompt);
  const setPromptFile = useChatStore((state) => state.setPromptFile);
  const addMessage = useChatStore((state) => state.addMessage);

  const onSendPrompt = () => {
    if (!prompt.trim()) return;
    addMessage({ role: "user", prompt, file: promptFile || undefined });
    setPrompt("");
    addMessage({
      role: "assistant",
      prompt: "Image generation in progress...",
      file: promptFile || undefined,
    });
    if (promptFile) setPromptFile(null);
  };

  return {
    onSendPrompt,
  };
};
