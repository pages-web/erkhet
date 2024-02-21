import FullOrders from '@/containers/orders/full-orders';
import ProfileLayout from '../profile-layout';

const Orders = () => {
  return (
    <ProfileLayout title="Orders" description="Your orders">
      <div className="space-y-3">
        <FullOrders />
      </div>
    </ProfileLayout>
  );
};

export default Orders;
