import Image from "next/image";
import FooterLogo from "@/assets/images/LogoTextFooter.png";
import Telegram from "@/assets/svgs/telegram.svg";
import Instagram from "@/assets/svgs/instagram.svg";
import Discord from "@/assets/svgs/discord.svg";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
const Footer = () => {
  return (
    <div className="w-full flex justify-center container mb-5">
      <footer className="bg-[#0C101A] rounded-[40px] w-full p-10 border border-gray-800">
        <div className="flex justify-between items-center font-bold">
          <div>
            <Link href={"/"}>
              <Image
                src={FooterLogo}
                width={200}
                alt="logo"
                className="object-contain"
              />
            </Link>
            <div className="flex flex-col gap-1.5">
              <h1 className="text-white/70 font-normal">
                Bizning ijtimoiy tarmoqlarimiz
              </h1>
              <div className="flex gap-3">
                <Link href={`https://web.telegram.org/`}>
                  <Image src={Telegram} alt="tg" height={22} />
                </Link>
                <Link href={`https://www.instagram.com/`}>
                  <Image src={Instagram} alt="insta" height={22} />
                </Link>
                <Link href={`https://discord.com/`}>
                  <Image src={Discord} alt="insta" height={22} />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link href={"/rules"}>
              <h1 className="flex items-center text-[17px] font-semibold text-white/80 hover:text-red-500 hover:text-[20px] transition-all">
                Server Qoidalari{" "}
                <ChevronRight
                  strokeWidth={2.5}
                  className="text-red-800 size-5"
                />
              </h1>
            </Link>
            <Link href={"/contact"}>
              <h1 className="flex items-center text-[17px] font-semibold text-white/80 hover:text-red-500 hover:text-[20px] transition-all">
                Biz bilan Bog'laning{" "}
                <ChevronRight
                  strokeWidth={2.5}
                  className="text-red-800 size-5 group-hove"
                />
              </h1>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
