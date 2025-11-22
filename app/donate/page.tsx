"use client";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { div } from "framer-motion/client";
import Link from "next/link";
import { useState } from "react";

const PROMOS = [
  { promo: "start", discount: 20 },
  { promo: "nyear", discount: 25 },
];

const Page = () => {
  const [amount, setAmount] = useState("");
  const [promo, setPromo] = useState("");
  const [total, setTotal] = useState(0);
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [promoError, setPromoError] = useState(false);
  const MIN_SUM = 500;

  const formatAmount = (value: string) => {
    const numericValue = value.replace(/\D/g, "");
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatAmount(e.target.value);
    setAmount(formatted);
    const numeric = parseInt(formatted.replace(/\s/g, "")) || 0;
    setTotal(numeric);
    if (appliedDiscount > 0) {
      const newTotal = numeric - (numeric * appliedDiscount) / 100;
      setTotal(newTotal);
    }
  };

  const handlePromoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/^#/, "").slice(0, 5);
    setPromo(value);
    setPromoError(false);
  };

  const handleUsePromo = () => {
    const found = PROMOS.find(
      (p) => p.promo.toLowerCase() === promo.toLowerCase()
    );
    if (found) {
      setAppliedDiscount(found.discount);
      const numeric = parseInt(amount.replace(/\s/g, "")) || 0;
      const discounted = numeric - (numeric * found.discount) / 100;
      setTotal(discounted);
      setPromoError(false);
    } else {
      setAppliedDiscount(0);
      setPromoError(true);
    }
  };

  const isMinSumValid = total >= MIN_SUM;
  const isPromoActive = promo && parseInt(amount.replace(/\s/g, "")) >= MIN_SUM;
  const isPromoValid = PROMOS.some(
    (p) => p.promo.toLowerCase() === promo.toLowerCase()
  );

  return (
    <div className="container">
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
              Hisobni To'ldirish
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col justify-center mb-10">
        <h1 className="text-red-500 font-bold text-2xl mb-5 flex justify-center mt-5">
          Hisobni To'ldirish
        </h1>
        <div className="flex items-center justify-center ">
          <div className="w-[550px] bg-[#0F1323] rounded-[15px] p-6 space-y-4 border-2 border-red-500/10">
            <div>
              <label className="text-sm mb-1 block font-semibold">
                Summani Kiriting
              </label>
              <input
                type="text"
                value={amount}
                onChange={handleAmountChange}
                maxLength={12}
                placeholder="0"
                className="w-full bg-[#161B2B] border border-[#161B2B] focus:border-red-500  rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none"
              />
              {!isMinSumValid && amount && (
                <p className="text-red-500 text-xs mt-1">Minimal summa 500</p>
              )}
            </div>

            <div>
              <label className="font-semibold text-sm mb-1 block">
                Promokod
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 ">
                  #
                </span>
                <input
                  type="text"
                  value={promo}
                  onChange={handlePromoChange}
                  placeholder="promo"
                  disabled={!isMinSumValid}
                  className={`w-full pl-6 border border-[#161B2B] focus:border-red-500  rounded-lg p-3 focus:outline-none bg-[#161B2B] ${
                    !isMinSumValid
                      ? "cursor-not-allowed opacity-50"
                      : "cursor-text"
                  }`}
                />
                <button
                  onClick={handleUsePromo}
                  disabled={!isPromoActive || !promo}
                  className={`ml-2 py-2 px-4 rounded-lg text-white ${
                    isPromoActive && isPromoValid
                      ? "bg-red-500 hover:bg-red-600 cursor-pointer"
                      : "bg-gray-700 cursor-not-allowed"
                  }`}
                >
                  Use
                </button>
              </div>
              {promoError && (
                <p className="text-red-500 text-xs mt-1">Notog'ri promo</p>
              )}
            </div>

            <div className="text-red-500 text-sm">
              Umumiy Summa: {total.toLocaleString("ru-RU")} UZS
              {appliedDiscount > 0 && <span> (-{appliedDiscount}%)</span>}
            </div>

            <button
              disabled={!isMinSumValid}
              className={`w-full py-3 rounded-lg text-white ${
                !isMinSumValid
                  ? "bg-gray-700 cursor-not-allowed pointer-events-none"
                  : "bg-red-500 hover:bg-red-500/50"
              }`}
            >
              To'ldirish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
