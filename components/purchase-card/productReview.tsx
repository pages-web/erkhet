import { getProductReview } from '@/sdk/queries/products';
import Rate from '../ui/rate';

const ProductReview = async ({ productId }: { productId: string }) => {
  const { review } = await getProductReview({ variables: { productId } });
  return (
    <div className="flex items-center pt-2">
      <Rate rate={review.average || 5} />
      <span className="ml-2 text-sm text-neutral-500">( {review.length} )</span>
    </div>
  );
};

export default ProductReview;
