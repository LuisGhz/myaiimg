import { useChatStore } from "@st/chat/chat-store";

export const useChat = () => {
  const prompt = useChatStore((state) => state.prompt);
  const promptFile = useChatStore((state) => state.promptFile);
  const loading = useChatStore((state) => state.loading);
  const error = useChatStore((state) => state.error);
  const setPrompt = useChatStore((state) => state.setPrompt);
  const setPromptFile = useChatStore((state) => state.setPromptFile);
  const sendPrompt = useChatStore((state) => state.sendPrompt);

  const onSendPrompt = async () => {
    if (!prompt.trim() || loading) return;

    await sendPrompt(prompt, promptFile);
    setPrompt("");
    setPromptFile(null);
  };

  return {
    prompt,
    promptFile,
    loading,
    error,
    onSendPrompt,
  };
};
