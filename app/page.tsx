import { CategoryCard } from '@/components/category-card/category-card';
import Display from '@/components/display/display';
import { Heading } from '@/components/heading/heading';
import MainBanner from '@/components/main-banner/main-banner';

export default function Home() {
  return (
    <>
      <MainBanner />
      <Heading title="Shop By Category" />
      <CategoryCard />
      <Display />
    </>
  );
}
