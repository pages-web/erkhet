import OrderItem from '@/components/profile/order/order-item';
import ProfileLayout from '../profile-layout';

const Orders = () => {
  return (
    <ProfileLayout title="Orders" description="Your orders">
      <div className="space-y-3">
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
    </ProfileLayout>
  );
};

export default Orders;
