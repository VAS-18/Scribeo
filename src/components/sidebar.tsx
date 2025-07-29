"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  ArrowBendDownLeftIcon,
  ArrowBendDownRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { AnimatePresence, motion } from "framer-motion";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const data = [
    { id: "1", title: "Chat #1" },
    { id: "2", title: "Chat #2" },
    { id: "3", title: "Chat #3" },
    { id: "4", title: "Chat #4" },
    { id: "5", title: "Chat #5" },
    { id: "1", title: "Chat #1" },
  ];

  return (
    <aside>
      <div
        className={`${
          isCollapsed ? "w-64" : "w-32"
        } h-screen p-4 flex flex-col border-r bg-gray-500 transition-all duration-300 ease-in-out`}
      >
        <div className="flex">
          <span>Logo</span>
          <Button variant="ghost" onClick={() => setIsCollapsed(!isCollapsed)}>
            {isCollapsed ? (
              <ArrowBendDownLeftIcon />
            ) : (
              <ArrowBendDownRightIcon />
            )}
          </Button>
        </div>
        {/* NEW CHAT BUTTON */}
        <div className="mt-4">
          {isCollapsed && <Button variant="outline">New Chat</Button>}
        </div>
        {/* HISTORY */}
        {isCollapsed && (
          <span className=" text-accent-foreground mt-10">Chats</span>
        )}
        <div className="flex-grow flex flex-col overflow-y-auto">
          {isCollapsed &&
            data.map((c) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0.5, x: 0, y: 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0.5, x: -10 }}
              >
                <Link
                  href={`/scribe/${c.id}`}
                  className="flex flex-col p-2 rounded-md hover:bg-gray-200 "
                >
                  {c.title}
                </Link>
              </motion.div>
            ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
