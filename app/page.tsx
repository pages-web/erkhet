// import { CategoryCard } from '@/components/category-card/category-card';
// import Display from '@/components/display/display';
// import { Heading } from '@/components/heading/heading';
// import MainBanner from '@/components/main-banner/main-banner';
import { getConfig } from '@/sdk/queries/auth';
import { Metadata } from 'next/types';

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  const { config } = await getConfig();

  return {
    title: config.name + ' - Нүүр хуудас',
    openGraph: {
      title: config.name + ' - Нүүр хуудас'
    }
  };
}

export default async function Home() {
  const { config } = await getConfig();
  return (
    <>
      {/* <MainBanner />
      <Heading title="Shop By Category" />
      <CategoryCard />
      <Display />
      <Heading title="Inspired by your picks" />
      <div className="container pb-20">
      </div>
     */}
      <div className="h-screen py-36 text-center text-3xl font-bold">
        Welcome to {config?.name}
      </div>
    </>
  );
}
