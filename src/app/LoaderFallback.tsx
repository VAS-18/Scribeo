"use client"

import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const LoaderFallback = () => {
  return (
    <div className="bg-white">
      <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-[9999]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        >
          <Loader2 className="w-10 h-10 text-blue-600" />
        </motion.div>
      </div>
    </div>
  );
};

export default LoaderFallback;
