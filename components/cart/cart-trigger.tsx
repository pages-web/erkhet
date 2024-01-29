'use client';

import { cartSheetAtom } from '@/store';
import { useSetAtom } from 'jotai';
import { useState } from 'react';
import { Button } from '../ui/button';
import { ShoppingCartIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import { LoadingOverlay } from '../ui/loading';

const Cart = dynamic(() => import('./cart'), { loading: LoadingOverlay });

const CartTrigger = () => {
  const [openSheet, setOpenSheet] = useState(false);
  const showSheet = useSetAtom(cartSheetAtom);

  return (
    <>
      <Button
        size="icon"
        onClick={() => {
          setOpenSheet(true);
          showSheet(true);
        }}
      >
        <ShoppingCartIcon className="h-5 w-5" />
      </Button>
      {openSheet && <Cart />}
    </>
  );
};

export default CartTrigger;
