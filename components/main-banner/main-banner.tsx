import { getKbArticles } from '@/sdk/queries/kb';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { IArticle } from '@/types/kb.types';
import Link from 'next/link';
import Image from '../ui/image';

const MainBanner = async () => {
  const { articles } = await getKbArticles({
    variables: {
      categoryIds: [process.env.KB_BANNERS],
    },
  });

  if (!(articles || []).length) return null;

  return (
    <div className="md:container">
      <Carousel className=" mb-4 md:mt-4 md:mb-8">
        <CarouselContent className="ml-0">
          {articles.map((article) => (
            <BannerItem key={article._id} {...article} />
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-8 hidden md:inline-flex" />
        <CarouselNext className="right-8 hidden md:inline-flex" />
      </Carousel>
    </div>
  );
};

const BannerItem = ({ _id, image, summary, attachments }: IArticle) => {
  return (
    <CarouselItem className="flex-basis-[1] pl-0" key={_id}>
      <Link
        className="relative aspect-[4/5] md:aspect-[13/5] md:rounded-2xl overflow-hidden block"
        href={summary || '/'}
      >
        <Image
          src={image?.url}
          alt=""
          width={1536}
          height={600}
          className="absolute object-cover inset-0 object-center hidden md:block"
          skipAnimation
        />
        <Image
          src={(attachments || [])[0]?.url || ''}
          alt=""
          width={1536}
          height={600}
          skipAnimation
          className="absolute object-cover inset-0 object-center md:hidden"
        />
      </Link>
    </CarouselItem>
  );
};

export default MainBanner;
