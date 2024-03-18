'use client';

import { cartSheetAtom } from '@/store';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { ShoppingCartIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import { LoadingOverlay } from '../ui/loading';
import { Badge } from '../ui/badge';
import CartCount from './cart-count';

const Cart = dynamic(() => import('./cart'), { loading: LoadingOverlay });

const CartTrigger = () => {
  const [openSheet, setOpenSheet] = useState(false);
  const [open, setOpen] = useAtom(cartSheetAtom);

  useEffect(() => {
    if (open) {
      setOpenSheet(open);
    }
  }, [open]);

  return (
    <>
      <Button
        size="icon"
        onClick={() => {
          setOpenSheet(true);
          setOpen(true);
        }}
        className="relative shadow-none"
      >
        <ShoppingCartIcon className="h-5 w-5" />
        <Badge
          variant="outline"
          className="absolute right-0 top-0 bg-background p-0 h-4 min-w-4 rounded-lg justify-center text-xs text-center leading-none"
        >
          <CartCount />
        </Badge>
      </Button>
      {(open || openSheet) && <Cart />}
    </>
  );
};

export default CartTrigger;
