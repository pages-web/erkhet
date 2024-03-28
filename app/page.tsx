// import { CategoryCard } from '@/components/category-card/category-card';
// import Display from '@/components/display/display';
// import { Heading } from '@/components/heading/heading';
import MainBanner from '@/components/main-banner/main-banner';
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

export default function Home() {
  return (
    <div className="min-h-screen">
      <MainBanner />
    </div>
  );
}
