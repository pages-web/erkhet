import { type OperationVariables, useMutation } from '@apollo/client';
import { mutations } from '../graphql/payment';
import { useAtomValue } from 'jotai';
import { selectedMethodAtom } from '@/store/payment.store';
import { onError } from '@/lib/utils';
import { useDonate } from '@/containers/donate/donate';
import { deliveryInfoAtom } from '@/store/donate.store';

const useCreateInvoice = ({
  appToken,
  posName,
}: {
  appToken: string;
  posName: string;
}) => {
  const context = {
    headers: {
      'erxes-app-token': appToken,
    },
  };

  const deliveryInfo = useAtomValue(deliveryInfoAtom);

  const selectedPaymentId = useAtomValue(selectedMethodAtom);
  const { detail } = useDonate();

  const [createInvoice, { reset, data, loading }] = useMutation(
    mutations.createInvoice,
    {
      context,
      onError,
    }
  );

  const handleCreateInvoice = (variables?: OperationVariables) =>
    createInvoice({
      variables: {
        amount: detail?.totalAmount,
        contentType: 'pos:orders',
        contentTypeId: detail?._id,
        customerType: 'customer',
        description: `${detail?.number} - ${posName.toUpperCase()} - ${
          detail?._id
        }`,
        data: { posToken: process.env.NEXT_PUBLIC_POS_TOKEN },
        selectedPaymentId: selectedPaymentId,
        phone: deliveryInfo?.phone,
        ...variables,
      },
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
