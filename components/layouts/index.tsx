import { Card, CardContent } from "@/components/ui/card";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const revalidate = 300;

const DefaultLayout = async ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <div className="">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-6  pb-12 mt-20">
            <div>
              <Card className="lg:w-[600px] bg-white flex-none relative">
                {children}
              </Card>
            </div>
            <div className="flex-auto bg-background ">
              <Button className="flex w-full items-center justify-start px-5 py-6 border border-gray-400 bg-white hover:bg-white font-medium text-base rounded-xl">
                1. Бүртгэл
              </Button>
              <Button className="flex items-center w-full  justify-start px-5 py-6 border border-gray-400 bg-white mt-5 hover:bg-white font-medium text-base rounded-xl">
                2. Нэхэмжлэх
              </Button>
              <Button className="flex items-center w-full  justify-start px-5 py-6 border border-gray-400 bg-white mt-5 hover:bg-white font-medium text-base rounded-xl">
                3. Төлбөр төлөх
              </Button>
              <Link href={"/"}>
                <Button className="flex items-center w-full  justify-start px-5 py-6 border border-gray-400 bg-white mt-5 hover:bg-white font-medium text-base rounded-xl">
                  4. Үндсэн нүүрлүү үсрэх
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
