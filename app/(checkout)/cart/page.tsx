import { Button } from '@/components/ui/button';
import CheckoutLayout from '../checkout-layout';
import OrderSummary from '@/components/order-summary/order-summary';
import Link from 'next/link';
import CartProductCard from '@/components/cart-product-card/cart-product-card';

const Cart = () => {
  return (
    <CheckoutLayout
      title="My Cart"
      backTitle="Back To Shopping"
      backUrl="/category"
    >
      <span className="col-span-7 mb-10 md:mb-0">
        <CartProductCard _id={''} name={''} unitPrice={0} />
      </span>
      <OrderSummary className="col-span-5 md:sticky md:top-20 h-fit">
        <Button asChild size={'lg'} className="w-full">
          <Link href="/checkout">Proceed to Checkout</Link>
        </Button>
      </OrderSummary>
    </CheckoutLayout>
  );
};

export default Cart;
