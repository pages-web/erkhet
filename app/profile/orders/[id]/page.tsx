import { IPageProps } from '@/types';
import ProfileLayout from '../../profile-layout';
import OrderDetailContent from '@/components/order-detail/order-detail';

const OrderDetail = ({ params }: IPageProps) => {
  return (
    <ProfileLayout title="Order Detail" description="order detail information">
      <div className="space-y-8">
        <OrderDetailContent id={params.id} />
      </div>
    </ProfileLayout>
  );
};

export default OrderDetail;
