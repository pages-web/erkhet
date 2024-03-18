'use client';
import { useAtomValue } from 'jotai';
import Price from '../price/price';
import { cartTotalAtom } from '@/store/cart.store';
import { deliveryItemAtom } from '@/store/order.store';

const DeliveryFee = () => {
  const totalAmount = useAtomValue(cartTotalAtom);
  const deliveryProduct = useAtomValue(deliveryItemAtom);
  return (
    <>
      <div className="flex justify-between items-start">
        <span>Items subtotal</span>
        <Price
          amount={(deliveryProduct
            ? totalAmount - deliveryProduct.unitPrice
            : totalAmount
          ).toString()}
        />
      </div>
      <div className="flex justify-between items-start">
        <span>Shipping</span>
        <Price amount={(deliveryProduct?.unitPrice || 0).toString()} />
      </div>
    </>
  );
};

export default DeliveryFee;
