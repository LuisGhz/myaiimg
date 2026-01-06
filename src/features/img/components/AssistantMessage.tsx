import type { ChatMessage } from "@st/chat/chat-store.type";
import "./AssistantMessage.css";

type UserMessageProps = {
  msg: ChatMessage;
};

export const AssistantMessage = ({ msg }: UserMessageProps) => {
  return (
    <div className={`p-2 flex flex-col items-start`}>
      <div className={`rotatingText p-2 rounded text-app`}>
        <p className="textItem">Image generation in progress...</p>
        <p className="textItem">I'm working on it!</p>
        <p className="textItem">Be patient while we create your image!</p>
      </div>
      {msg.file && (
        <img
          className="max-h-80 w-auto mb-2 rounded"
          src={msg.file instanceof File ? URL.createObjectURL(msg.file) : msg.file}
          alt="Message Attachment"
        />
      )}
    </div>
  );
};
