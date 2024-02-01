import OrderSummary from '@/components/order-summary/order-summary';
import CheckoutLayout from '../checkout-layout';

const Checkout = () => {
  return (
    <CheckoutLayout title="Checkout" backTitle="Back" backUrl="/cart">
      <span className="col-span-7 mb-10 md:mb-0"></span>
      <OrderSummary className="col-span-5 md:sticky md:top-20 h-fit" />
    </CheckoutLayout>
  );
};

export default Checkout;
