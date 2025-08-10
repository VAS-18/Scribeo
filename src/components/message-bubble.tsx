import { Message } from "@/types/types";
import { motion } from "framer-motion";

const MessageBubble = ({ msg }: { msg: Message }) => {
  let Tuser: boolean = false;
  if (msg.role === "User") {
    Tuser = true;
  }

  return (
    <div
      className={`flex items-start gap-4 ${
        msg.role === "User" ? "justify-end" : ""
      }`}
    >
      <motion.div
        initial={{
          x: Tuser ? 40 : -40,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        exit={{
          x: Tuser ? 40 : -40,
          opacity: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 40,
          mass: 0.5,
        }}
        className={`max-w-lg px-4 py-2 ${
          msg.role === "User"
            ? "bg-primary text-primary-foreground rounded-full rounded-br-xl"
            : ""
        }`}
      >
        <p className="text-sm">{msg.content}</p>
        {msg.type === "video" && msg.url && (
          <video
            src={`http://127.0.0.1:8000${msg.url}`}
            controls
            className="mt-2 rounded-lg w-full"
          >
            Your browser does not support the video tag.
          </video>
        )}
      </motion.div>
    </div>
  );
};

export default MessageBubble;
