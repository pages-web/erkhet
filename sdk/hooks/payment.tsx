import { type OperationVariables, useMutation } from '@apollo/client';
import { mutations } from '../graphql/payment';
import { useDetail } from '@/components/order-detail/order-detail';
import { useAtomValue } from 'jotai';
import { selectedMethodAtom } from '@/store/payment.store';
import { onError } from '@/lib/utils';

const useCreateInvoice = ({
  appToken,
  posName
}: {
  appToken: string;
  posName: string;
}) => {
  const context = {
    headers: {
      'erxes-app-token': appToken
    }
  };

  const selectedPaymentId = useAtomValue(selectedMethodAtom);
  const { totalAmount, _id, customer, customerType, number, deliveryInfo } =
    useDetail();

  const [createInvoice, { reset, data, loading }] = useMutation(
    mutations.createInvoice,
    {
      context,
      onError
    }
  );

  const handleCreateInvoice = (variables?: OperationVariables) =>
    createInvoice({
      variables: {
        amount: totalAmount,
        contentType: 'pos:orders',
        contentTypeId: _id,
        customerId: customer?._id || 'empty',
        customerType: customerType || 'customer',
        description: `${number} - ${posName.toUpperCase()} - ${_id}`,
        data: { posToken: process.env.NEXT_PUBLIC_POS_TOKEN },
        selectedPaymentId: selectedPaymentId,
        phone: deliveryInfo?.phone,
        ...variables
      }
    });

  const { invoiceCreate } = data || {};

  return { loading, reset, data: invoiceCreate, handleCreateInvoice };
};

export const useCheckInvoice = () => {
  const [checkInvoice, { data, loading }] = useMutation(mutations.checkInvoice);

  const { invoiceCheck } = data || {};

  return { loading, checkInvoice, status: invoiceCheck };
};

export default useCreateInvoice;
