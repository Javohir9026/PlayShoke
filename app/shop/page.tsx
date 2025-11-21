import React from "react";
import PremiumImage from "@/assets/images/premium.webp";
import { Premiums } from "@/utils/mock";
import Image from "next/image";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
const page = () => {
  return (
    <div className="container mb-10 mt-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/shop" className="text-red-500">
                Premiumlar
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-white font-bold text-[24px] mb-5">Premiumlar</h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Premiums.map((item) => (
          <Link
            href={`/shop/premium/${item.id}`}
            key={item.id}
            className="border-2 px-4 py-4 border-red-500 rounded-[20px] flex flex-col gap-3 group hover:bg-red-900/20 cursor-pointer"
          >
            <div className="rounded-lg ">
              <Image
                src={PremiumImage}
                alt="premium image"
                className="rounded-lg group-hover:brightness-120 transition-all"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-center text-[20px]">{item.name}</h1>
              <h1 className="font-semibold text-center text-[17px]">
                {item.term}
              </h1>
              <div>
                {item.discountPersantage > 0 ? (
                  <div className="flex justify-between items-center">
                    <h1 className="px-1 bg-red-700/70 text-white rounded-[5px] text-[18px]">
                      -{item.discountPersantage}%
                    </h1>
                    <div className="flex gap-2">
                      <h1 className="line-through text-gray-300/80">
                        {item.price} UZS
                      </h1>
                      <h1 className="font-semibold text-[18px] px-2 bg-red-600/20 text-red-500 group-hover:bg-red-500 group-hover:text-black inline-block rounded-[5px]">
                        {item.price * (1 - item.discountPersantage / 100)} UZS
                      </h1>
                    </div>
                  </div>
                ) : (
                  <h1 className="text-[18px] px-2 font-semibold bg-red-600/20 text-red-500 group-hover:bg-red-500 group-hover:text-black inline-block rounded-[5px]">
                    {item.price} UZS
                  </h1>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
