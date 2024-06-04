import { DialogFooter, DialogHeader } from '@/components/ui/dialog';
import { handleMethodAtom } from '@/store/payment.store';
import { useAtom, useAtomValue } from 'jotai';
import Image from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { InfoIcon } from 'lucide-react';
import { usePaymentConfig } from '@/sdk/queries/payment';
import useCreateInvoice from '@/sdk/hooks/payment';
import { IPayment } from '@/types/payment.types';
import { Loading } from '@/components/ui/loading';
import { useEffect } from 'react';
import QrDetail, { QrContainer } from './qr-detail';
import PhoneDetail from './phone-detail';
import { Badge } from '@/components/ui/badge';
import { gql, useSubscription } from '@apollo/client';
import { refetchQueries } from '../../../../erxes/packages/plugin-grants-ui/src/configs/containers/List';

const QR_PAYMENTS = ['qpay', 'monpay', 'pocket', 'qpayQuickqr'];
const PHONE_PAYMENTS = ['socialpay', 'storepay'];

const PaymentDetail = ({ refetch }: { refetch: () => void }) => {
  const selectedMethod = useAtomValue(handleMethodAtom);
  const { name, payments, erxesAppToken, loading } = usePaymentConfig();

  const {
    handleCreateInvoice,
    loading: loadingAction,
    reset,
    data,
  } = useCreateInvoice({
    posName: name || '',
    appToken: erxesAppToken || '',
  });

  const { errorDescription, status, apiResponse, idOfProvider, _id } =
    data || {};

  useSubscription(
    gql`
      subscription invoiceUpdated($invoiceId: String!) {
        invoiceUpdated(_id: $invoiceId)
      }
    `,
    {
      variables: { invoiceId: _id },
      skip: !_id,
      onData(options) {
        const { invoiceUpdated } = (options.data as any) || {};
        if (invoiceUpdated?.status === 'paid') {
        }
      },
    }
  );

  const kind = payments?.find((p: IPayment) => p._id === selectedMethod)?.kind;

  const isQr = QR_PAYMENTS.includes(kind || '');
  const isPhone = PHONE_PAYMENTS.includes(kind || '');

  useEffect(() => {
    if (selectedMethod) {
      reset();
    }
    if (isQr) {
      handleCreateInvoice();
    }
  }, [selectedMethod]);

  if (loading) return null;

  if (loading || !kind) return null;

  return (
    <>
      {isQr &&
        (loadingAction ? (
          <Loading className="pt-32 pb-24" />
        ) : (
          (!!apiResponse?.qrData ||
            (isQr && (errorDescription || apiResponse?.error))) && (
            <QrDetail
              errorDescription={errorDescription || apiResponse?.error}
              status={status}
              qrCode={apiResponse?.qrData}
              urls={apiResponse?.urls}
              id={_id}
            />
          )
        ))}
      {isPhone && (
        <PhoneDetail
          kind={kind}
          loading={loading}
          handleCreate={handleCreateInvoice}
          data={data}
          errorDescription={errorDescription}
        />
      )}
    </>
  );
};

export default PaymentDetail;
