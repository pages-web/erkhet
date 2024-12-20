"use client";

import { Button } from "@/components/ui/button";
import PaymentDetail from "@/containers/payment/payment-detail";

const Hello = () => {
  return (
    <div className="flex flex-col w-full text-black">
      <Button
        variant="outline"
        className="flex items-center justify-start px-5 py-6 bg-white font-medium text-base rounded-lg mb-5"
      >
        1. Бүртгэл
      </Button>
      <Button
        variant="outline"
        className="flex items-center justify-start px-5 py-6 bg-white font-medium text-base rounded-lg mb-5"
      >
        2. Нэхэмжлэх
      </Button>
      <Button
        variant="outline"
        className="flex items-center justify-start px-5 py-6 bg-white font-medium text-base rounded-lg mb-5"
      >
        3. Төлбөр төлөх
      </Button>

      <Button
        variant="outline"
        className="flex items-center justify-start px-5 py-6 bg-white font-medium text-base rounded-lg mt-5"
      >
        4. Үндсэн нүүрлүү үсрэх
      </Button>
    </div>
  );
};

export default Hello;
