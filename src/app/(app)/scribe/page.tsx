"use client";

import InputArea from "@/components/input-area";
import MessageList from "@/components/message-list";
import { Message } from "@/types/types";
import axios from "axios";
import { Divide, Loader } from "lucide-react";
import { FormEvent, useState } from "react";

const Scribe = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  let defaultState: boolean = false;

  if (messages.length === 0) {
    defaultState = true;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!input.trim()) {
      return;
    }

    const userMessage: Message = { role: "User", content: input };

    setMessages((p) => [...p, userMessage]);

    setInput("");

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/render`,
        {
          message: input,
        }
      );

      const llmMessage: Message = response.data;
      setMessages((p) => [...p, llmMessage]);
      console.log("reaching to the end");
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch from render Api");

      const errorMess: Message = {
        role: "LLM",
        content: "Sorry Cant Reach the render Api",
      };

      setMessages((p) => [...p, errorMess]);
      setIsLoading(false);
    }
  };

  // This is basically the center input thinggy you see when you open a new chat

  if (defaultState) {
    return (
      <div className="relative min-h-dvh flex items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-10">
          <div
            className="absolute inset-0 animate-gradient bg-[radial-gradient(60%_60%_at_80%_-10%,rgba(34,211,238,0.22),transparent_60%),radial-gradient(70%_70%_at_0%_90%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(50%_50%_at_50%_50%,rgba(20,184,166,0.12),transparent_60%)]"
          />
        </div>

        <div className="w-full max-w-xl">
          <InputArea
            input={input}
            setInput={setInput}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col min-h-dvh overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 animate-gradient bg-[radial-gradient(60%_60%_at_80%_-10%,rgba(34,211,238,0.22),transparent_60%),radial-gradient(70%_70%_at_0%_90%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(50%_50%_at_50%_50%,rgba(20,184,166,0.12),transparent_60%)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_50%,rgba(0,0,0,0)_40%,rgba(0,0,0,0.55)_100%)]" />
      </div>

      {/* Chat Message */}
      <div className="flex-grow p-6 overflow-y-auto pb-24 mt-20">
        <div className="max-w-3xl mx-auto space-y-6">
          <MessageList messages={messages} isLoading={isLoading} />
          {isLoading && <Loader />}
        </div>
      </div>

      <div className="fixed bottom-0 inset-x-0 z-30 ">
        <div className="max-w-3xl mx-auto p-4">
          <InputArea
            input={input}
            setInput={setInput}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Scribe;
