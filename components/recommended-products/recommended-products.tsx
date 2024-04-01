import { getProducts } from '@/sdk/queries/products';
import ProductCard from '../product-card/product-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '../ui/carousel';

const RecommendedProducts = async ({
  categoryId,
  productId,
}: {
  categoryId?: string;
  productId?: string;
}) => {
  const { products } = await getProducts({
    variables: { categoryId, perPage: 12, isKiosk: true },
  });
  const exceptCurrent = products.filter((product) => product._id !== productId);

  if (!exceptCurrent.length) return null;

  return (
    <Carousel opts={{ containScroll: 'keepSnaps', dragFree: true }}>
      <CarouselContent>
        {exceptCurrent.map((product) => (
          <CarouselItem className="basis-[300px]" key={product._id}>
            <ProductCard {...product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="2xl:-left-12 left-6 hidden md:inline-flex" />
      <CarouselNext className="2xl:-right-12 right-6 hidden md:inline-flex" />
    </Carousel>
  );
};

export default RecommendedProducts;
