"use client"

import { FormEvent, useState } from "react";

type Message = {
  role: 'user' | 'LLM',
  content: String
}

const Scribe = () => {

  const [messages, setMessages] = useState<Message[]>([]);
  const[input, setInput] = useState<String>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
  }

  return (
    <div>
      <div>
        <div>
          This is the Chat Area
        </div>
        <div>
          This the input area
        </div>
      </div>
    </div>
  );
};

export default Scribe;
