"use client";
import {
  Bell,
  ChevronDown,
  ChevronUp,
  House,
  ReceiptText,
  Scale,
  Star,
} from "lucide-react";
import Image from "next/image";
import ProfilePhoto from "@/assets/images/profilePhoto.jpg";
import LogoText from "@/assets/images/LogoTextPng.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import BellOpen from "./BellOpen";
import { cn } from "@/lib/utils";
import ProfileOpen from "./ProfileOpen";

export default function Header() {
  const pathname = usePathname();

  const [clickedBell, setClickedBell] = useState(false);
  const [clickedProfile, setClickedProfile] = useState(false);

  const navItems = [
    { href: "/", icon: <House />, label: "Bosh sahifa" },
    { href: "/shop", icon: <Star />, label: "Premium" },
    { href: "/contact", icon: <ReceiptText />, label: "Bog'lanish" },
    { href: "/rules", icon: <Scale />, label: "Qoidalar" },
  ];

  return (
    <div className="w-full flex justify-between mt-4 mb-22 container">
      <header
        className="fixed z-50 w-[95%] bg-[#0C101A] text-white px-6 py-3 
                         flex items-center justify-between shadow-lg 
                         rounded-full border border-gray-800 max-h-20 mb-10 max-w-[1440px]"
      >
        <div className="flex items-center gap-3 max-w-[200px] select-none">
          <Link href="/">
            <Image
              src={LogoText}
              alt="Logo Text"
              width={300}
              className="object-cover max-h-20"
            />
          </Link>
        </div>

        <div className="flex gap-8">
          <div className="flex gap-2">
            <nav className="hidden md:flex items-center gap-8 text-sm">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-1 cursor-pointer transition-colors ${
                      isActive
                        ? "text-red-500 font-semibold"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.icon} {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                setClickedBell((prev) => !prev);
                setClickedProfile(false);
              }}
            >
              <Bell
                className={cn(
                  "text-xl cursor-pointer hover:text-gray-300",
                  clickedBell ? "text-red-500" : ""
                )}
              />
            </button>

            <button
              onClick={() => {
                setClickedProfile((prev)=>(!prev));
                setClickedBell(false);
              }}
              className="flex items-center gap-1 cursor-pointer"
            >
              <Image
                src={ProfilePhoto}
                alt="User"
                width={36}
                height={36}
                className="rounded-full object-cover"
              />
              {clickedProfile ? (
                <ChevronUp className="text-lg text-red-500" />
              ) : (
                <ChevronDown className="text-lg" />
              )}
            </button>
          </div>
        </div>
      </header>

      {clickedBell && <BellOpen />}
      {clickedProfile && <ProfileOpen/>}
    </div>
  );
}
