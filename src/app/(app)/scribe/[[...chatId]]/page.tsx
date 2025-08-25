 // The interactive part
import ScribeClient from "@/components/ScribeClient";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { PrismaClient } from "../../../../../generated/prisma";
import { Message } from "@/types/types";

export default async function ScribePage({ params }: { params: { chatId?: string[] } }) {
  const prisma = new PrismaClient();

  const session = await  auth.api.getSession({
            headers: await headers(),
          });
  if (!session?.user?.id) {
    redirect("/login"); 
  }
  const chatId = params.chatId?.[0];

  let initialMessages: Message[] = [];

  if (chatId) {
    
    const chat = await prisma.chat.findFirst({
      where: {
        id: chatId,
        userId: session.user.id, 
      },
      include: {
        Message: {
          orderBy: { createdAt: 'asc' },
        },
      },
    });

    if (!chat) {
      redirect('/scribe'); 
    }
    
    initialMessages = chat.Message as Message[];
  }

  
  return (
    <ScribeClient 
      chatId={chatId} 
      initialMessages={initialMessages} 
    />
  );
}

