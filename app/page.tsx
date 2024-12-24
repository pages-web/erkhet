import { Metadata } from "next/types";

import Donate from "@/containers/donate/donate";

import { getProducts } from "@/sdk/queries/products";
import { getConfig } from "@/sdk/queries/auth";
import { IProduct } from "@/types/product.types";

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
    <div>
      <Donate products={products} />
    </div>
  );
}
