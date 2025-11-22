"use client";

import { BellOff } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const BellOpen = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="mt-22 fixed z-99 right-10 backdrop-blur-md bg-black/70 w-80 h-40 rounded-[20px] p-4 top-3"
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-white/70">Bildirishnomalar</h1>
        <div className="border-2 border-black/40"></div>
        <div className="flex justify-center items-center h-full opacity-20 mt-6">
          <BellOff />
        </div>
      </div>
    </motion.div>
  );
};

export default BellOpen;
