import { getProducts } from '@/sdk/queries/products';
import ProductCard from '../product-card/product-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '../ui/carousel';
import { IProduct } from '@/types/product.types';

const RecommendedProducts = async ({
  categoryId,
  productId
}: {
  categoryId?: string;
  productId?: string;
}) => {
  const { products } = await getProducts({
    variables: { categoryId, perPage: 12, isKiosk: true }
  });
  const exceptCurrent = products.filter(product => product._id !== productId);

  if (!exceptCurrent.length) return null;

  return (
    <Carousel opts={{ dragFree: true }}>
      <CarouselContent>
        {exceptCurrent.map((product: IProduct) => (
          <CarouselItem
            className="basis-1/2 md:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
            key={product._id}
          >
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
