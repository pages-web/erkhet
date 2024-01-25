'use client';

import { ShoppingCartIcon } from 'lucide-react';
import { Counter, CounterButton, CounterInput } from '../counter/counter';
import { Button } from '../ui/button';

const AddToCart = () => {
  return (
    <div className="py-4 flex items-center gap-4">
      <Counter size="lg">
        <CounterButton minus />
        <CounterInput />
        <CounterButton />
      </Counter>
      <Button className="h-11 flex-1 font-semibold" size="lg">
        <ShoppingCartIcon className="h-5 w-5 mr-2" />
        Add to cart
      </Button>
    </div>
  );
};

export default AddToCart;
