import ProductCard from '../product-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '../ui/carousel';

const RecommendedProducts = () => {
  return (
    <div className="container mb-10">
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-[300px]">
            <ProductCard />
          </CarouselItem>
          <CarouselItem className="basis-[300px]">
            <ProductCard />
          </CarouselItem>
          <CarouselItem className="basis-[300px]">
            <ProductCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="2xl:-left-12 left-6 hidden md:inline-flex" />
        <CarouselNext className="2xl:-right-12 right-6 hidden md:inline-flex" />
      </Carousel>
    </div>
  );
};

export default RecommendedProducts;
