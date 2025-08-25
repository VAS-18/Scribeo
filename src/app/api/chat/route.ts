import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma";


export async function POST(req: Request) {

    const prisma = new PrismaClient();

  try {
    const session = await  auth.api.getSession({
          headers: await headers(),
        });
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const { message } = await req.json();
    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const newChat = await prisma.chat.create({
      data: {
        userId: session.user.id,
        title: message.slice(0, 30), 
        Message: {
          create: [
            { role: "User", content: message },
            // TODO: AI service here to get the first response
            { role: "AI", content: "This is the AI's first response." },
          ],
        },
      },
      include: { Message: true },
    });

    return NextResponse.json({
      newChatId: newChat.id,
      messages: newChat.Message,
    }, { status: 201 });

  } catch (error) {
    console.error("Failed to create chat:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}