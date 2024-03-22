import CheckoutLayout from '../checkout-layout';
import AddressForm from '@/components/address-form/address-form';

const Checkout = () => {
  return (
    <CheckoutLayout title="Захиалгын хаяг" backTitle="Буцах" backUrl="/cart">
      <AddressForm />
    </CheckoutLayout>
  );
};

export default Checkout;
