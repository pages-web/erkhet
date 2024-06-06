import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Donate from '@/containers/donate/donate';
import { getConfig } from '@/sdk/queries/auth';
import { getProducts } from '@/sdk/queries/products';

import { Metadata } from 'next/types';
import Copy from './copy';

export async function generateMetadata(): Promise<Metadata> {
  const { config } = await getConfig();

  return {
    title: config.name + ' - Хандив өгөх',
    openGraph: {
      title: config.name + ' - Хандив өгөх'
    }
  };
}

export default async function Home() {
  const { products } = await getProducts();
  return (
    <Tabs defaultValue="dans">
      <TabsList className="grid grid-cols-2 mx-4 mt-4">
        <TabsTrigger value="dans">Хандивын данс</TabsTrigger>
        <TabsTrigger value="soon">Qpay</TabsTrigger>
      </TabsList>
      <TabsContent value="dans" className="p-4 space-y-4 pb-8">
        <Copy />
      </TabsContent>
      <TabsContent value="soon">
        <Donate products={products} />
      </TabsContent>
    </Tabs>
  );

  // return <Donate products={products} />;
}
