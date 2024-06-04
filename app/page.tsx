import Donate from '@/containers/donate/donate';
import { getConfig } from '@/sdk/queries/auth';
import { getProducts } from '@/sdk/queries/products';
import { Metadata } from 'next/types';

export async function generateMetadata(): Promise<Metadata> {
  const { config } = await getConfig();

  return {
    title: config.name + ' - Нүүр хуудас',
    openGraph: {
      title: config.name + ' - Нүүр хуудас',
    },
  };
}

export default async function Home() {
  const { products } = await getProducts();

  return <Donate products={products} />;
}
