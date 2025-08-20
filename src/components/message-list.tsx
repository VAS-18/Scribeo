import { Message } from "@/types/types";
import MessageBubble from "./message-bubble";

const MessageList = ({
  messages = [],
  isLoading,
}: {
  messages: Message[];
  isLoading?: boolean;
}) => {
  
  return (
    <div>
      {messages.map((m, i) => (
        <MessageBubble key={i} msg={m} />
      ))}
    </div>
  );
};

export default MessageList;
