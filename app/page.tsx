import { Metadata } from "next/types";
import { Card, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Donate from "@/containers/donate/donate";
import DonateInfo from "@/containers/donate/info";
import { getProducts } from "@/sdk/queries/products";
import { getConfig } from "@/sdk/queries/auth";
import { IProduct } from "@/types/product.types";
import Hello from "@/components/title/Hello";
import { DonateProvider } from "@/containers/donate/DonateProvider";

export async function generateMetadata(): Promise<Metadata> {
  const { config } = await getConfig();

  return {
    title: `${config.name} - Хандив өгөх`,
    openGraph: {
      title: `${config.name} - Хандив өгөх`,
    },
  };
}

type CategoryType = {
  [key: string]: IProduct[];
};
export default async function Home() {
  const { products } = await getProducts();

  const categories: CategoryType = {
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
    <DonateProvider>
      <div className="container flex gap-10 mt-16">
        <Card className="lg:w-[600px] bg-white flex-none relative">
          <Tabs defaultValue="price-1">
            <TabsList className="grid grid-cols-3 mx-3 mt-3 gap-3">
              <TabsTrigger value="price-1">ААН</TabsTrigger>
              <TabsTrigger value="price-2">ТГБ</TabsTrigger>
              <TabsTrigger value="price-3">Бусад</TabsTrigger>
            </TabsList>

            {Object.entries(categories).map(([key, products], index) => (
              <TabsContent
                key={key}
                value={`price-${index + 1}`}
                className="p-4 space-y-4 pb-8"
              >
                <Donate products={products} />
              </TabsContent>
            ))}

            <div className="px-4 flex flex-col gap-3">
              <DonateInfo />
            </div>

            <CardFooter />
          </Tabs>
        </Card>
        <Hello />
      </div>
    </DonateProvider>
  );
}
