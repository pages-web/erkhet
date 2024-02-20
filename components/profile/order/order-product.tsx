import Price from '@/components/price/price';
import { Badge } from '@/components/ui/badge';
import Image from '@/components/ui/image';

const OrderProduct = () => {
  return (
    <div className="overflow-hidden flex p-2 border-b last-of-type:border-b-0 gap-2 md:gap-0">
      <Image
        src="/images/product.webp"
        alt=""
        height={200}
        width={200}
        className="h-20 w-20 md:h-32 md:w-32 rounded overflow-hidden flex-none"
      />

      <div className="flex justify-between flex-1 p-2 md:p-6 flex-wrap text-sm md:text-base gap-2 md:gap-0">
        <div className="space-y-2">
          <h3 className="font-medium">Nike Air Jordan 1</h3>
          <Badge>Delivered</Badge>
        </div>
        <div>
          <div className="flex gap-4">
            <Price amount="176000" />
            <Badge variant="secondary">x2</Badge>
            <Price amount="176000" className="font-semibold" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProduct;
