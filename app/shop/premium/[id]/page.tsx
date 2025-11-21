"use client";
import { Premiums } from "@/utils/mock";
import { Check } from "lucide-react";
import { useParams } from "next/navigation";
import PremiumImage from "@/assets/images/premium.webp";
import Image from "next/image";
const page = () => {
  const param = useParams();
  const { id } = param;
  const data = Premiums.find((item) => item.id === Number(id));
  console.log(data);
  return (
    <div className="container mb-10">
      <h1 className="text-[30px] font-bold">PREMIUM {data?.term}</h1>
      <div className="flex gap-5 mt-5">
        <div className=" p-5 rounded-[20px] bg-red-900/20 flex flex-col gap-4 w-full max-h-[400px] ">
          <h1 className="font-bold text-17">Tavsif</h1>
          <div className="w-full border border-gray-700/40"></div>
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold">PREMIUM Imkoniyatlari:</h1>
            <div className="flex flex-col gap-1">
              {data?.benfists.map((item, index) => (
                <div
                  className="text-[15px] flex gap-1 items-center"
                  key={index}
                >
                  {" "}
                  <Check
                    className="text-red-500"
                    strokeWidth={4}
                    size={20}
                  />{" "}
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            src={PremiumImage}
            alt="premium image"
            width={350}
            className="rounded-[20px]"
          />
          <div className="flex flex-col gap-2">
            {data?.discountPersantage ? (
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h1 className="px-1 bg-red-500 text-black rounded-[5px] text-[15px]">
                    -{data.discountPersantage}%
                  </h1>
                  <div className="flex gap-2 text-[19px]">
                    <h1 className="line-through text-gray-300/80">
                      {data.price} UZS
                    </h1>
                    <h1 className="font-semibold text-[18px]  inline-block rounded-[5px]">
                      {data.price * (1 - data.discountPersantage / 100)} UZS
                    </h1>
                  </div>
                </div>
                <h1 className="text-[14px]">
                  Chegirma Tugaydi: {data.discountEnds}
                </h1>
              </div>
            ) : (
              <h1 className="text-[20px] px-2 font-semibold  text-white  inline-block rounded-[5px]">
                {data?.price} UZS
              </h1>
            )}
            <button className="bg-red-500 rounded-[10px] text-black p-3 font-semibold cursor-pointer">
              SOTIB OLISH
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h1 className="text-white/70 text-[15px] text-start">Mahsulot</h1>
              <h1>{data?.name}</h1>
            </div>
            <div className="w-full border border-gray-700/40"></div>
            <div className="flex justify-between items-center">
              <h1 className="text-white/70 text-[15px] text-start">Muddat</h1>
              <h1>{data?.term}</h1>
            </div>
            <div className="w-full border border-gray-700/40"></div>
            <div className="flex justify-between items-center">
              <h1 className="text-white/70 text-[15px]">Serverlar</h1>
              <h1>Barcha Serverlar</h1>
            </div>
            <div className="w-full border border-gray-700/40"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
