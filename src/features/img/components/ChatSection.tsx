import { useChatStore } from "@st/chat/chat-store";
import { UserMessage } from "./UserMessage";
import { AssistantMessage } from "./AssistantMessage";

export const ChatSection = () => {
  const messages = useChatStore((state) => state.messages);
  return (
    <section className="flex-1">
      {messages.map((msg, index) =>
        msg.role === "user" ? (
          <UserMessage key={index} msg={msg} />
        ) : (
          <AssistantMessage key={index} msg={msg} />
        )
      )}
    </section>
  );
};
