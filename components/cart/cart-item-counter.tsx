import Price from '../price/price';
import { Counter, CounterButton, CounterInput } from '../counter/counter';
import { useSetAtom } from 'jotai';
import { updateCartAtom } from '@/store/cart.store';
import { memo } from 'react';

const CartItemCounter = ({
  unitPrice,
  _id,
  count
}: {
  _id: string;
  unitPrice: number;
  count: number;
}) => {
  const changeCartItem = useSetAtom(updateCartAtom);

  return (
    <div className="flex h-16 flex-col justify-between">
      <Price
        className="flex justify-end space-y-2 text-right text-sm"
        amount={unitPrice * count + ''}
      />
      <Counter size="sm">
        <CounterButton
          minus
          onClick={() => changeCartItem({ _id, count: count - 1 })}
        />
        <CounterInput
          value={count}
          onChange={e => changeCartItem({ _id, count: Number(e.target.value) })}
        />
        <CounterButton
          onClick={() => changeCartItem({ _id, count: count + 1 })}
        />
      </Counter>
    </div>
  );
};

export default memo(CartItemCounter);
