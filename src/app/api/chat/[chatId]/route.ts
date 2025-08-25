import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../generated/prisma";
import { headers } from "next/headers";


export async function POST(
  req: Request,
  { params }: { params: { chatId: string } }
) {
  const prisma = new PrismaClient();

  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    const { chatId } = params;

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { message } = await req.json();
    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    
    await prisma.chat.findFirstOrThrow({
      where: { id: chatId, userId: session.user.id },
    });

    
    await prisma.message.create({
      data: { role: "User", content: message, chatId },
    });
    // TODO: AI service here to get the next response
    await prisma.message.create({
      data: {
        role: "AI",
        content: "This is the AI's follow-up response.",
        chatId,
      },
    });

 
    const updatedMessages = await prisma.message.findMany({
      where: { chatId },
      orderBy: { createdAt: "asc" },
    });

    return NextResponse.json({ messages: updatedMessages });
  } catch (error) {
    console.error("Failed to post message:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
