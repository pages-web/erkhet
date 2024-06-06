import { Button } from '@/components/ui/button';
import Image from '@/components/ui/image';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Donate from '@/containers/donate/donate';
import { getConfig } from '@/sdk/queries/auth';
import { getProducts } from '@/sdk/queries/products';
import { CopyIcon } from 'lucide-react';
import { Metadata } from 'next/types';

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
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="dans">Хандивын данс</TabsTrigger>
        <TabsTrigger value="soon">Qpay</TabsTrigger>
      </TabsList>
      <TabsContent value="dans" className="p-4 space-y-4 pb-8">
        <div className="relative">
          <Input
            className="px-12 font-bold disabled:opacity-80"
            value="821 008 606"
            disabled
          />

          <Button
            variant="outline"
            className="absolute right-0 top-0 h-10 w-10"
            size="icon"
          >
            <CopyIcon className="h-5 w-5" />
          </Button>
          <img
            src="/tdbbank.avif"
            height={40}
            width={40}
            className="absolute top-[1px] left-[1px] bottom-[1px] h-[38px] w-[38px] z-10 rounded"
          />
        </div>
        <div className="relative">
          <Input
            className="px-12 font-bold disabled:opacity-80"
            value="НООРОГ КРЕАТИВ СТУДИО ХХК"
            disabled
          />
          <Button
            variant="outline"
            className="absolute right-0 top-0 h-10 w-10"
            size="icon"
          >
            <CopyIcon className="h-5 w-5" />
          </Button>
        </div>
      </TabsContent>
      <TabsContent value="soon">
        <Donate products={products} />
      </TabsContent>
    </Tabs>
  );

  // return <Donate products={products} />;
}
