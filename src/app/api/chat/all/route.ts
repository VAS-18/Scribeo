import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../generated/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function GET() {
    
  const prisma = new PrismaClient();

  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    const userId = session?.user.id;

    if (!userId) {
      return NextResponse.json({ message: "Not Autho" }, { status: 401 });
    }

    const allChats = await prisma.chat.findMany({
      where: {
        userId: userId,
      },
    });

    return NextResponse.json({ chats: allChats }, { status: 201 });
  } catch (error) {
    console.error("Failed to log all the Chats", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
