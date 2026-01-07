import { useChatStore } from "@st/chat/chat-store";
import { UserMessage } from "./UserMessage";
import { AssistantMessage } from "./AssistantMessage";
import { Spin, Alert } from "antd";

export const ChatSection = () => {
  const messages = useChatStore((state) => state.messages);
  const loading = useChatStore((state) => state.loading);
  const error = useChatStore((state) => state.error);

  return (
    <section className="flex-1 overflow-y-auto">
      {messages.map((msg, index) =>
        msg.role === "user" ? (
          <UserMessage key={index} msg={msg} />
        ) : (
          <AssistantMessage key={index} msg={msg} />
        )
      )}
      {loading && (
        <div className="flex justify-center items-center p-4">
          <Spin size="large" tip="Generating image..." />
        </div>
      )}
      {error && (
        <div className="p-4">
          <Alert
            message="Error"
            description={error}
            type="error"
            closable
            onClose={() => useChatStore.setState({ error: null })}
          />
        </div>
      )}
    </section>
  );
};
