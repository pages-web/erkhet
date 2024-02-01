import ProductCard from '../product-card/product-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '../ui/carousel';

const RecommendedProducts = () => {
  return (
    <Carousel opts={{ containScroll: 'keepSnaps', dragFree: true }}>
      <CarouselContent>
        <CarouselItem className="basis-[200px]">
          <ProductCard />
        </CarouselItem>
        <CarouselItem className="basis-[200px]">
          <ProductCard />
        </CarouselItem>
        <CarouselItem className="basis-[200px]">
          <ProductCard />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="2xl:-left-12 left-6 hidden md:inline-flex" />
      <CarouselNext className="2xl:-right-12 right-6 hidden md:inline-flex" />
    </Carousel>
  );
};

export default RecommendedProducts;
