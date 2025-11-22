import { SteamUser } from "@/utils/mock";
import {
  AtSign,
  BadgeCheck,
  CalendarCheck2,
  CircleUser,
  Eye,
  IdCard,
  Minus,
} from "lucide-react";
import React from "react";

type ProfileTabsProps = {
  activeTab: "main" | "violate" | "stats";
  id: string;
};

const ProfileTabs: React.FC<ProfileTabsProps> = ({ activeTab, id }) => {
  const data = SteamUser.find((user) => user.steamId === id);
  const cards = [
    {
      text: "ID",
      data: data?.steamId,
      icon: <IdCard />,
    },
    {
      text: "Ro'yxatdan O'tilgan sana",
      data: data?.createdAt,
      icon: <CalendarCheck2 />,
    },
    {
      text: "E-Mail",
      data: data?.Email,
      icon: <AtSign />,
    },
    {
      text: "Login",
      data: data?.SteamLogin,
      icon: <CircleUser />,
    },
    {
      text: "Tasdiqlangan",
      data: data?.approved ? "Tasdiqlangan" : "Tasdiqlanmagan",
      icon: <BadgeCheck />,
    },
    {
      text: "Hisob Turi",
      data: data?.hidden ? "Yashirin" : "Ochiq",
      icon: <Eye />,
    },
  ];
  return (
    <div>
      {activeTab === "main" && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards.map((item, index) => (
              <div key={index} className="w-full flex bg-[#0C101A] items-center gap-2 rounded-[15px] p-4">
                <div className="text-red-500 p-2 bg-red-300/20 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h1 className="text-white/60 text-[18px]">{item.text}</h1>
                  <h1 className="font-semibold text-[15px] md:text-[20px]">
                    {item.data?.length! > 0 ? (
                      item.data
                    ) : (
                      <Minus strokeWidth={3} />
                    )}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "violate" && <div>
            <div className="flex items-center justify-center h-60">
                <h1 className="font-bold text-[40px] text-white/50">Soon ...</h1>
            </div>
        </div>}
      {activeTab === "stats" && <div>Stats Tab Content</div>}
    </div>
  );
};

export default ProfileTabs;
