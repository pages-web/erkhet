import { useQuery } from '@apollo/client';
import { queries } from '../graphql/payment';

const usePaymentConfig = () => {
  const { data, loading } = useQuery(queries.paymentConfig);
  const { erxesAppToken, paymentIds } = data?.currentConfig || {};

  const paymentQuery = useQuery(queries.payment, {
    context: {
      headers: {
        'erxes-app-token': erxesAppToken
      }
    },
    skip: !erxesAppToken
  });

  const { payments } = paymentQuery.data || {};

  const selectedPayments: IPayment[] = (payments || []).filter(
    (payment: IPayment) => paymentIds.includes(payment._id)
  );

  return {
    loading: loading || paymentQuery.loading,
    payments: selectedPayments
  };
};

interface IPayment {
  _id: string;
  name: string;
  kind: string;
}

export { usePaymentConfig };
