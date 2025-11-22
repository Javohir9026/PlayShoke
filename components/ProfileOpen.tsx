"use client";

import { ArrowRight, LogOut, Pen, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { SteamUser } from "@/utils/mock";
import Link from "next/link";

const data = SteamUser[0];
const ProfileOpen = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="mt-22 fixed z-99 right-10 backdrop-blur-md bg-black/70 w-80 rounded-[20px] p-5 top-3"
    >
      <div className="flex flex-col gap-2">
        <Link
          href={`/profile/${data.steamId}`}
          className="flex items-center justify-between group hover:bg-red-500/10 px-2 py-1 rounded-lg"
        >
          <div className="flex flex-col">
            <h1 className="font-semibold text-[18px] group-hover:text-red-500 ">
              {data.userName}
            </h1>
            <h1 className="text-[13px] text-white/50 -mt-1.5 tracking-wider">
              Mening Profilim
            </h1>
          </div>
          <ArrowRight strokeWidth={3} className="group-hover:text-red-500" />
        </Link>
        <div className="flex gap-2">
          <Link
            href={"/donate"}
            className="p-3 bg-red-950/50 inline-block rounded-[15px] w-full border-2 border-black/70 hover:border-red-500/50"
          >
            <h1 className="text-[12px] text-white/50">Balansim</h1>
            <h1 className="text-red-500 font-bold text-[14px]">
              {data.balance} UZS
            </h1>
          </Link>
          <button className="flex p-3 bg-red-950/50  rounded-[15px] w-full items-center justify-center cursor-pointer group  border-2 border-black/70 hover:border-red-500/50">
            <h1 className="flex gap-1 text-[18px] items-center group-hover:text-red-500">
              Chiqish <LogOut size={20} />
            </h1>
          </button>
        </div>
        <Link href={'/profile/edit'} className="bg-red-950/50 p-3 flex rounded-[15px] items-center gap-2 group  border-2 border-black/70 hover:border-red-500/50">
          <Pen size={18} className="group-hover:text-red-500"/>
          <h1 className="text-[14px] group-hover:text-red-500">Profilni Tahrirlash</h1>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProfileOpen;
