import { Button } from '@/components/ui/button';
import CheckoutLayout from '../checkout-layout';
import OrderSummary from '@/components/order-summary/order-summary';
import Link from 'next/link';
import CartProductList from '@/components/cart-product-list/cart-product-list';
import CartPageContent from './cart-page-content';

const Cart = () => {
  return (
    <CheckoutLayout
      title="My Cart"
      backTitle="Back To Shopping"
      backUrl="/category"
    >
      <CartPageContent>
        <OrderSummary className="col-span-5 md:sticky md:top-20 h-fit">
          <Button asChild size={'lg'} className="w-full">
            <Link href="/checkout">Proceed to Checkout</Link>
          </Button>
        </OrderSummary>
      </CartPageContent>
    </CheckoutLayout>
  );
};

export default Cart;
