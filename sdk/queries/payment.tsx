import { useQuery } from '@apollo/client';
import { queries } from '../graphql/payment';
import { IPayment } from '@/types/payment.types';

const usePaymentConfig = () => {
  const { data, loading } = useQuery(queries.paymentConfig, {
    nextFetchPolicy: 'cache-first'
  });

  const { erxesAppToken, paymentIds, name } = data?.currentConfig || {};

  const paymentQuery = useQuery(queries.payment, {
    context: {
      headers: {
        'erxes-app-token': erxesAppToken
      }
    },
    nextFetchPolicy: 'cache-first',
    skip: !erxesAppToken
  });

  const { payments } = paymentQuery.data || {};

  const selectedPayments: IPayment[] = (payments || []).filter(
    (payment: IPayment) => paymentIds.includes(payment._id)
  );

  return {
    loading: loading || paymentQuery.loading,
    payments: selectedPayments,
    name,
    erxesAppToken
  };
};

export { usePaymentConfig };
