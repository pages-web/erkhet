import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../ui/carousel';
import Picture from '../ui/picture';

const MainBanner = () => {
  return (
    <div className="container">
      <Carousel className="mt-3 mb-4 md:mt-4 md:mb-8">
        <CarouselContent className="ml-0">
          <CarouselItem className="relative aspect-[7/3] md:aspect-[80/23] flex-basis-[1] rounded-2xl overflow-hidden">
            <Picture
              fill
              quality={100}
              sizes={'100vw'}
              desktop="https://d1f6qhhrbg3j8a.cloudfront.net/img/240854/original/Tsagaan_sar_2024_web_banner.jpg"
              mobile="https://cdn.cody.mn/img/250012/800x0xwebp/mobile_banner_converse.jpg?h=b7bbe137c87a60956ebf41796360de7121b5d856"
              className="object-center object-cover"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-8 hidden md:inline-flex" />
        <CarouselNext className="right-8 hidden md:inline-flex" />
      </Carousel>
    </div>
  );
};

export default MainBanner;
