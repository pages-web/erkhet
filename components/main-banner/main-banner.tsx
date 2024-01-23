import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

const MainBanner = () => {
  return (
    <Carousel className="mb-10">
      <CarouselContent>
        <CarouselItem className="relative aspect-[80/23]">
          <Image
            src="https://d1f6qhhrbg3j8a.cloudfront.net/img/240854/original/Tsagaan_sar_2024_web_banner.jpg"
            fill
            alt=""
            className="absolute inset-0"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="left-8" />
      <CarouselNext className="right-8" />
    </Carousel>
  );
};

export default MainBanner;
