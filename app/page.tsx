import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Donate from "@/containers/donate/donate";
import { getConfig } from "@/sdk/queries/auth";
import { getProducts } from "@/sdk/queries/products";
import { Metadata } from "next/types";
import { CardFooter } from "@/components/ui/card";
import DonateInfo from "@/containers/donate/info";
import { IProduct } from "@/types/product.types";

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

  const categories = {
    AAN: products.filter(
      (product: IProduct) =>
        product.category?.name === "Аж ахуй нэгж байгууллага"
    ),
    TGB: products.filter(
      (product: IProduct) =>
        product.category?.name === "Тайлан гаргадаг байгууллага"
    ),
    Busad: products.filter(
      (product: IProduct) => product.category?.name === "Бусад"
    ),
  };

  return (
    <div>
      <Tabs defaultValue="price-1">
        <TabsList className="grid grid-cols-3 mx-3 mt-3 gap-3">
          <TabsTrigger value="price-1">ААН</TabsTrigger>
          <TabsTrigger value="price-2">ТГБ</TabsTrigger>
          <TabsTrigger value="price-3">Бусад</TabsTrigger>
        </TabsList>

        <TabsContent value="price-1" className="p-4 space-y-4 pb-8">
          <Donate products={categories.AAN} />
        </TabsContent>
        <TabsContent value="price-2" className="p-4 space-y-4 pb-8">
          <Donate products={categories.TGB} />
        </TabsContent>
        <TabsContent value="price-3" className="p-4 space-y-4 ">
          <Donate products={categories.Busad} />
        </TabsContent>

        <div className="px-4 flex flex-col gap-3">
          <DonateInfo />
        </div>

        <CardFooter />
      </Tabs>
    </div>
  );
}
