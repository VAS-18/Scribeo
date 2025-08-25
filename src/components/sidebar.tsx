"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import {
  ArrowBendDownLeftIcon,
  ArrowBendDownRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import axios from "axios";

type Chat = {
  id: string;
  title: string;
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [chat, setChat] = useState<Chat[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getAllChats = async () => {
      const response = await axios.get("/api/chat/all");

      const data = response.data.chats.map((c: any) => ({
        id: c.id,
        title: c.title,
      }));

      setChat(data);
    };
    getAllChats();
  }, []);


  return (
    <aside className="fixed inset-y-0 left-0 z-50">
      <div
        className={`${
          isCollapsed ? "w-64" : "w-32"
        } h-screen p-4 flex flex-col gap-2 transition-all duration-300 ease-in-out overflow-hidden bg-white/10
           `}
      >
        <div className="flex items-center justify-between">
          <span className="font-semibold tracking-wide">Logo</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? (
              <ArrowBendDownLeftIcon />
            ) : (
              <ArrowBendDownRightIcon />
            )}
          </Button>
        </div>

        {/* NEW CHAT BUTTON */}
        <div className="mt-4">
          {isCollapsed && (
            <Button
              variant="outline"
              className="w-full border-white/20 bg-white/5 hover:bg-white/10"
              onClick={() => router.push("/scribe")}
            >
              New Chat
            </Button>
          )}
        </div>

        {/* HISTORY */}
        {isCollapsed && (
          <span className="mt-6 text-xs uppercase tracking-wider text-foreground/60">
            Chats
          </span>
        )}

        <div className="flex-grow gap-5 mt-2 flex flex-col overflow-y-auto no-scrollbar ">
          {isCollapsed &&
            chat.map((c, i) => (
              <motion.div
                key={`${c.id}-${i}`}
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 1 }}
              >
                <Link
                  href={`/scribe/${c.id}`}
                  className="flex w-full p-2
                    hover:bg-gray-800/30 hover:rounded-2xl "
                >
                  <span className=" truncate">{c.title}</span>
                </Link>
              </motion.div>
            ))}
        </div>
        <div
          className={`bg-red-500 ${
            isCollapsed ? "flex justify-start" : "flex justify-center"
          } transition-all duration-300 ease-in-out`}
        >
          {isCollapsed ? <div>meow</div> : <div className=" ">img</div>}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
