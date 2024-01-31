import { IProduct } from '@/types/product.types';
import Link from 'next/link';
import Image from '../ui/image';
import { TagIcon } from 'lucide-react';

const CartProductCard = ({ _id }: IProduct) => {
  return (
    <div className="relative flex first:border-t border-b-[1px] border-neutral-200 hover:shadow-lg min-w-[320px] p-4 last:mb-0">
      <div className="relative overflow-hidden rounded-md w-[100px] sm:w-[176px]">
        <Link href={`/product/${_id}`}>
          <Image src={''} alt="" width={300} height={300} />
        </Link>
        <div className="absolute top-0 left-0 text-white bg-indigo-600 py-1 pl-1.5 pr-2 text-xs font-medium inline-flex items-center">
          <TagIcon className="mr-1 h-3 w-3" />
          Sale
        </div>
      </div>
      <div className="flex flex-col pl-4 min-w-[180px] flex-1"></div>
    </div>
  );
};   

export default CartProductCard;
