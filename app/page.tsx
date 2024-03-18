import { CategoryCard } from '@/components/category-card/category-card';
import Display from '@/components/display/display';
import { Heading } from '@/components/heading/heading';
import MainBanner from '@/components/main-banner/main-banner';
import { getConfig } from '@/sdk/queries/auth';
import { Metadata } from 'next/types';

export async function generateMetadata(): Promise<Metadata> {
  const { config } = await getConfig();

  return {
    title: config.name + ' - Нүүр хуудас',
    openGraph: {
      title: config.name + ' - Нүүр хуудас'
    }
  };
}

export default function Home() {
  return (
    <>
      <MainBanner />
      <Heading title="Shop By Category" />
      <CategoryCard />
      <Display />
      <Heading title="Inspired by your picks" />
      <div className="container pb-20">{/* <RecommendedProducts /> */}</div>
    </>
  );
}
