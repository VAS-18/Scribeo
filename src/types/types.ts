export type MessageRole = "User" | "LLM";
export type MessageType = "video" | "text";

export interface Message {
  role: MessageRole;
  content: string;
  type?: MessageType;
  url?: string;
}
