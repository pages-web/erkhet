import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Donate from "@/containers/donate/donate";
import { getConfig } from "@/sdk/queries/auth";
import { getProducts } from "@/sdk/queries/products";
import { Metadata } from "next/types";
import Copy from "./copy";
import { CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import DonateInfo from "@/containers/donate/info";
import { Button } from "@/components/ui/button";

export async function generateMetadata(): Promise<Metadata> {
  const { config } = await getConfig();

  return {
    title: config.name + " - Хандив өгөх",
    openGraph: {
      title: config.name + " - Хандив өгөх",
    },
  };
}

export default async function Home() {
  const { products } = await getProducts();

  const group1 = products.slice(0, Math.ceil(products.length / 3));
  const group2 = products.slice(
    Math.ceil(products.length / 3),
    Math.ceil((2 * products.length) / 3)
  );
  const group3 = products.slice(Math.ceil((2 * products.length) / 3));

  return (
    <div>
      <Tabs defaultValue="price-1">
        <TabsList className="grid grid-cols-3 mx-4 mt-4 gap-3">
          <TabsTrigger value="price-1">ААН</TabsTrigger>
          <TabsTrigger value="price-2">ТГБ</TabsTrigger>
          <TabsTrigger value="price-3">Бусад</TabsTrigger>
        </TabsList>
        <TabsContent value="price-1" className="p-4 space-y-4 pb-8">
          <Donate products={group1} />
        </TabsContent>
        <TabsContent value="price-2" className="p-4 space-y-4 pb-8">
          <Donate products={group2} />
        </TabsContent>
        <TabsContent value="price-3" className="p-4 space-y-4 pb-8">
          <Donate products={group3} />
        </TabsContent>
        <div className="px-4 flex flex-col gap-3">
          <h1 className="text-black font-medium">Ибаримт</h1>
          <div className="flex gap-4 items-center justify-center bg-background ">
            <Button className="flex w-full items-center justify-start px-5 py-6 border border-gray-400 bg-white hover:bg-white font-medium text-base rounded-xl">
              Хувь хүн
            </Button>
            <Button className="flex items-center w-full  justify-start px-5 py-6 border border-gray-400 bg-white  hover:bg-white font-medium text-base rounded-xl">
              Байгууллага
            </Button>
          </div>
        </div>

        <div className="mt-4 px-4 ">
          <DonateInfo />
        </div>

        <CardFooter />
      </Tabs>
    </div>
  );
}
