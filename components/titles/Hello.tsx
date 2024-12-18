"use client";

import { Button } from "../ui/button";
import PaymentDetail from "@/containers/payment/payment-detail";

const Hello = () => {
  return (
    <div className="flex-auto bg-background ">
      <Button className="flex w-full items-center justify-start px-5 py-6 border border-gray-400 bg-white hover:bg-white font-medium text-base rounded-lg">
        1. Бүртгэл
      </Button>
      <Button className="flex items-center w-full justify-start px-5 py-6 border border-gray-400 bg-white mt-5 hover:bg-white font-medium text-base rounded-lg">
        2. Нэхэмжлэх
      </Button>
      <div>
        <Button className="flex items-center w-full justify-start px-5 py-6 border border-gray-400 bg-white mt-5 hover:bg-white font-medium text-base rounded-lg">
          3. Төлбөр төлөх
        </Button>
      </div>

      <Button className="flex items-center w-full justify-start px-5 py-6 border border-gray-400 bg-white mt-5 hover:bg-white font-medium text-base rounded-lg">
        4. Үндсэн нүүрлүү үсрэх
      </Button>
    </div>
  );
};

export default Hello;
