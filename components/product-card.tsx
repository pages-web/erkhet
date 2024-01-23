import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { ShoppingCartIcon } from 'lucide-react';

const ProductCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'border border-neutral-200 rounded-md hover:shadow-lg flex-auto flex-shrink-0',
        className
      )}
    >
      <div className="relative">
        <Link href={'/product/ll'} className="relative block w-full pb-[100%]">
          <Image
            src="/images/product.webp"
            alt=""
            className="object-cover rounded-md aspect-square w-full h-full"
            fill
            sizes="(max-width: 768px) 50vw, 190px"
          />
        </Link>
      </div>
      <div className="border-t p-2 border-neutral-200 text-sm">
        <Link href={'/product/ll'} className="hover:text-primary">
          Athletic mens walking sneakers
        </Link>
        <span
          className="block py-2 font-bold"
          data-testid="product-card-vertical-price"
        >
          145&apos;500 ₮
        </span>
        <Button size="sm" className="font-bold">
          <ShoppingCartIcon className="h-4 w-4 mr-1" strokeWidth={2.5} /> Add
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
