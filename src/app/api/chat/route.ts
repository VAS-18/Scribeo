import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma";

export async function POST(req: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;
  const { message, chatId } = await req.json();

  const prisma = new PrismaClient

  if (!message) {
    return NextResponse.json({ error: "No message specified" }, { status: 400 });
  }


  if (!chatId) {
    const chat = await prisma.chat.create({
      data: {
        userId,
        title: "New Chat",
        Message: {
          create: {
            role: "User",
            content: message,
          },
        },
      },
      include: { Message: true }, 
    });

    return NextResponse.json(
      { message: "New Chat Created", chat },
      { status: 200 }
    );
  }


  const chat = await prisma.chat.findUnique({
    where: { id: chatId },
  });

  if (!chat) {
    return NextResponse.json({ error: "Chat not found" }, { status: 404 });
  }

  const newMessage = await prisma.message.create({
    data: {
      role: "User",
      content: message,
      chatId,
    },
  });

  return NextResponse.json(
    { message: "Message added to chat", newMessage },
    { status: 200 }
  );
}
