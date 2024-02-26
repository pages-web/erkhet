import CheckoutLayout from '../checkout-layout';
import AddressForm from '@/components/address-form/address-form';

const Checkout = () => {
  return (
    <CheckoutLayout title="Checkout" backTitle="Back" backUrl="/cart">
      <AddressForm />
    </CheckoutLayout>
  );
};

export default Checkout;
