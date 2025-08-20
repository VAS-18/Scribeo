import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../../../../generated/prisma";

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  { params }: { params: { chatId: string } }
) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;
    const { chatId } = params;

    if (!chatId) {
      return NextResponse.json(
        { error: "Chat ID parameter is missing" },
        { status: 400 }
      );
    }

    const chat = await prisma.chat.findFirst({
      where: {
        id: chatId,
        userId: userId,
      },
      include: {
        Message: true,
      },
    });

    if (!chat) {
      return NextResponse.json({ error: "Chat not found" }, { status: 404 });
    }

    return NextResponse.json(chat, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch chat:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}