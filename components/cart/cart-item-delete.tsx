import { updateCartAtom } from '@/store/cart.store';
import { useSetAtom } from 'jotai';
import { Button } from '../ui/button';
import { XIcon } from 'lucide-react';
import { memo } from 'react';

const CartItemDelete = ({ _id }: { _id: string }) => {
  const changeCartItem = useSetAtom(updateCartAtom);
  return (
    <Button
      size="sm"
      className="h-5 px-1 rounded-full"
      onClick={() => changeCartItem({ _id, count: 0 })}
    >
      <XIcon className="h-3 w-3" />
    </Button>
  );
};

export default memo(CartItemDelete);
