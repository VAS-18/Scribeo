"use client";

import { Message } from "@/types/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import InputArea from "./input-area";
import MessageList from "./message-list";

interface ScribeClientProps {
  chatId?: string;
  initialMessages: Message[];
}

export default function ScribeClient({ chatId, initialMessages }: ScribeClientProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  
  useEffect(() => {
    setMessages(initialMessages);
  }, [initialMessages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;

   
    const optimisticUserMessage: Message = { 
      role: "User", 
      content: trimmedInput, 
      id: 'optimistic-id', 
      createdAt: new Date() 
    };

    setMessages(prev => [...prev, optimisticUserMessage]);
    setInput("");
    setIsLoading(true);

    try {
      if (!chatId) {
        
        const response = await axios.post('/api/chat', { message: trimmedInput });
        const { newChatId } = response.data;
        
        router.push(`/scribe/${newChatId}`);
      } else {
        
        const response = await axios.post(`/api/chat/${chatId}`, { message: trimmedInput });
      
        setMessages(response.data.messages);
      }
    } catch (error) {
      console.error("Failed to send message", error);
      
      setMessages(prev => prev.filter(msg => msg.id !== 'optimistic-id'));
    } finally {
      setIsLoading(false);
    }
  };
  
  const isNewChat = !chatId;
  if (isNewChat) {
    return (
      <div className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden">
        
        <div className="font-main text-2xl mb-10">Hi, USER</div>
        <div className="w-full max-w-xl">
          <InputArea input={input} setInput={setInput} handleSubmit={handleSubmit} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col min-h-dvh overflow-hidden">
      <div className="flex-grow p-6 overflow-y-auto pb-24 mt-20">
        <div className="max-w-3xl mx-auto space-y-6">
          <MessageList messages={messages} isLoading={isLoading} />
        </div>
      </div>
      <div className="fixed bottom-0 inset-x-0 z-30">
        <div className="max-w-3xl mx-auto p-4">
          <InputArea input={input} setInput={setInput} handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}