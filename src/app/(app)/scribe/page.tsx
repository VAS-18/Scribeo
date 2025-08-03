"use client";

import InputArea from "@/components/input-area";
import axios from "axios";
import Image from "next/image";
import { FormEvent, useState } from "react";

type Message = {
  role: "user" | "LLM";
  content: String;
  type?: "text" | "video";
  url?: string;
};

const Scribe = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<String>("");
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!input.trim()) {
      return;
    }

    const userMessage: Message = { role: "user", content: input };

    setMessages((p) => [...p, userMessage]);

    setInput("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/render", {
        message: input,
      });

      const llmMessage: Message = response.data;
      setMessages((p) => [...p, llmMessage]);
      console.log("reaching to the end")
      setIsLoading(false)
    } catch (error) {
      console.error("Failed to fetch from render Api");

      const errorMess: Message = {
        role: "LLM",
        content: "Sorry Cant Reach the render Api",
      };

      setMessages((p) => [...p, errorMess]);
      setIsLoading(false)
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Chat Messages Area */}
      <div className="flex-grow p-6 overflow-y-auto">
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.length === 0 && (
            <div className="text-center text-muted-foreground">Hello User</div>
          )}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 ${
                msg.role === "user" ? "justify-end" : ""
              }`}
            >
              <div
                className={`max-w-lg px-4 py-2 ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground rounded-full"
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
              </div>
            </div>
          ))}

          {isLoading && (
            <div>
              <Image src={"/3-dots-bounce.svg"} width={30} height={30} alt="Loader"/>
            </div>
          )}

        </div>
      </div>

      {/* Input Form Area */}
      <InputArea
        input={input} 
        setInput={setInput} 
        handleSubmit={handleSubmit} 
      />
      
    </div>
  );
};

export default Scribe;
