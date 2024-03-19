import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from '../ui/image';
import { Button } from '../ui/button';
import { ShoppingCartIcon } from 'lucide-react';
import { IProduct } from '../../types/product.types';
import ProductCardAdd from './product-card-add.client';

const ProductCard = ({
  className,
  ...product
}: IProduct & { className?: string }) => {
  const { name, attachment, unitPrice, _id } = product;
  return (
    <div
      className={cn(
        'border border-neutral-200 rounded-md hover:shadow-lg flex-auto flex-shrink-0',
        className
      )}
    >
      <div className="relative">
        <Link
          href={`/product/${_id}`}
          className="relative block w-full pb-[100%]"
        >
          <Image
            src={attachment?.url || ''}
            alt=""
            className="object-cover rounded-md aspect-square w-full h-full"
            fill
            sizes="(max-width: 768px) 50vw, 190px"
          />
        </Link>
      </div>
      <div className="border-t p-2 border-neutral-200 text-sm">
        <Link href={`/product/${_id}`} className="hover:text-primary">
          {name}
        </Link>
        <span
          className="block py-2 font-bold"
          data-testid="product-card-vertical-price"
        >
          {(unitPrice || '').toLocaleString()} ₮
        </span>
        <ProductCardAdd {...product} />
      </div>
    </div>
  );
};

export default ProductCard;
