"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SteamUser } from "@/utils/mock";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import SteamIcon from "@/assets/svgs/SteamIcon.svg";
import {
  ChartNoAxesColumnDecreasing,
  ChartNoAxesColumnIncreasing,
  Home,
  ShieldMinus,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import ProfileTabs from "@/components/ProfileTabs";
const page = () => {
  const param = useParams();
  const { id } = param;
  const data = SteamUser.find((user) => user.steamId === id);
  const [activeTab, setActiveTab] = useState<"main" | "violate" | "stats">(
    "main"
  );
  return (
    <div className="container mb-5">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Asosiy</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-red-500">
              Profil - {data?.userName}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-5 flex flex-col gap-5">
        <div className="flex justify-between items-center bg-[#0C101A] p-4 rounded-[20px]">
          <div className="flex gap-5">
            <div className="relative">
              <Image
                src={data?.UserAvatar!}
                alt="avatar"
                width={130}
                height={130}
                className="object-cover rounded-[20px] border-3 border-gray-700"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col ">
                <h1 className="font-bold text-[25px]">{data?.userName}</h1>
                {data?.isOnline ? (
                  <div className="text-lime-400">Online</div>
                ) : (
                  <div className="text-red-500">Offline</div>
                )}
                <h1 className="text-white/50 text-[14px]">
                  Balans: {data?.balance} UZS
                </h1>
              </div>
              <button className="font-semibold px-2 py-1 border border-white/50 cursor-pointer hover:border-red-500 hover:text-red-500 rounded-full">
                Tahrirlash
              </button>
            </div>
          </div>
          <Link
            href={data?.steamAcc!}
            target="_blank"
            className="py-4 px-2 bg-[#00000069] rounded-[10px] group cursor-pointer"
          >
            <Image
              src={SteamIcon}
              alt="steamIconSvg"
              width={20}
              height={20}
              className="opacity-50 group-hover:opacity-100"
            ></Image>
          </Link>
        </div>
        <div
          className="
  flex flex-col sm:flex-row 
  items-center justify-center 
  gap-3 sm:gap-4 md:gap-5
"
        >
          <button
            onClick={() => setActiveTab("main")}
            className={cn(
              `
      px-3 py-2 text-sm
      sm:px-4 sm:py-2 sm:text-base
      md:px-5 md:py-2
      lg:px-6 lg:py-3 lg:text-lg
      flex items-center gap-2 
      text-white/80 rounded-lg 
      w-[110px] sm:w-[130px] md:w-[150px]
      cursor-pointer justify-center
      `,
              activeTab === "main"
                ? "text-black bg-red-500"
                : "hover:text-red-500 hover:bg-red-300/10"
            )}
          >
            <Home className="w-5 h-5 shrink-0" strokeWidth={1.5} />
            Asosiy
          </button>

          <button
            onClick={() => setActiveTab("violate")}
            className={cn(
              `
      px-3 py-2 text-sm
      sm:px-4 sm:py-2 sm:text-base
      md:px-5 md:py-2
      lg:px-6 lg:py-3 lg:text-lg
      flex items-center gap-2 
      text-white/80 rounded-lg 
      w-[150px] sm:w-[170px] md:w-[190px]
      cursor-pointer text-center justify-center
      `,
              activeTab === "violate"
                ? "text-black bg-red-500"
                : "hover:text-red-500 hover:bg-red-300/10"
            )}
          >
            <ShieldMinus className="w-5 h-5 shrink-0" strokeWidth={1.5} />
            Qoidabuzarliklar
          </button>

          <button
            className={cn(
              `
      px-3 py-2 text-sm
      sm:px-4 sm:py-2 sm:text-base
      md:px-5 md:py-2
      lg:px-6 lg:py-3 lg:text-lg
      flex items-center gap-2 
      text-white/80 rounded-lg 
      w-[130px] sm:w-[150px] md:w-[170px]
      cursor-not-allowed justify-center
      `,
              activeTab === "stats"
                ? "text-black bg-red-500"
                : "hover:text-red-500 hover:bg-red-300/10"
            )}
          >
            <ChartNoAxesColumnIncreasing
              className="w-5 h-5 shrink-0"
              strokeWidth={1.5}
            />
            Statistika
          </button>
        </div>

        <div>
          <ProfileTabs activeTab={activeTab} id={String(id)} />
        </div>
      </div>
    </div>
  );
};

export default page;
