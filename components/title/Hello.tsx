"use client";

import PaymentDetail from "@/containers/payment/payment-detail";
import { cn } from "@/lib/utils";

const Hello = () => {
  return (
    <div className="flex flex-col w-full text-black gap-6">
      <div className="flex w-full flex-col items-start justify-between rounded-xl border border-gray-300 bg-white p-4 shadow-md hover:shadow-lg transition-shadow">
        <p className={cn("w-full text-lg font-semibold text-gray-700")}>
          1. Бүртгэл
        </p>
      </div>

      <div className="flex w-full flex-col items-start justify-between rounded-xl border border-gray-300 bg-white p-4 shadow-md hover:shadow-lg transition-shadow">
        <p className={cn("w-full text-lg font-semibold text-gray-700")}>
          2. Нэхэмжлэх
        </p>
      </div>

      <div className="flex w-full flex-col gap-4 items-center justify-between rounded-xl border border-gray-300 bg-white p-4 shadow-md hover:shadow-lg transition-shadow">
        <p className={cn("w-full text-lg font-semibold text-gray-700")}>
          3. Төлбөр төлөх
        </p>
        <PaymentDetail />
      </div>

      <div className="flex w-full flex-col items-start justify-between rounded-xl border border-gray-300 bg-white p-4 shadow-md hover:shadow-lg transition-shadow">
        <p
          className={cn(
            "w-full text-lg font-semibold text-gray-700 hover:text-primary transition-colors"
          )}
        >
          4. Үндсэн нүүрлүү үсрэх
        </p>
      </div>
    </div>
  );
};

export default Hello;
