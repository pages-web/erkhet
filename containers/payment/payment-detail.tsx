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

const QR_PAYMENTS = ['qpay', 'monpay', 'pocket', 'qpayQuickqr'];
const PHONE_PAYMENTS = ['socialpay', 'storepay'];

const PaymentDetail = () => {
  const selectedMethod = useAtomValue(handleMethodAtom);
  const { name, payments, erxesAppToken, loading } = usePaymentConfig();

  const {
    handleCreateInvoice,
    loading: loadingAction,
    reset,
    data
  } = useCreateInvoice({
    posName: name,
    appToken: erxesAppToken
  });

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

  if (loading) return <Loading className="py-32" />;

  const { errorDescription, status, apiResponse, idOfProvider, _id } =
    data || {};

  return (
    <>
      <DialogHeader className="flex-row gap-4 items-center justify-between my-2 md:mt-0">
        <div className="flex items-center gap-4">
          <Image
            src={`/images/payments/${kind}.png`}
            className="object-contain rounded-lg flex-none"
            height={36}
            width={36}
          />
          <div className="text-left">
            <div className="font-medium capitalize leading-none mb-0.5">
              {kind}
            </div>
            <div className="text-neutral-500 text-xs md:text-md">
              {isQr
                ? 'Qr кодыг уншуулж төлбөрөө төлнө үү'
                : 'Бүртгэлтэй утасны дугаараа оруулана уу'}
            </div>
          </div>
        </div>
        {!loadingAction && !!status && (
          <Badge
            variant="outline"
            className="p-2 px-4 rounded-xl bg-yellow-100, border-amber-200 text-yellow-500"
          >
            {status}
          </Badge>
        )}
      </DialogHeader>
      {isQr &&
        (loadingAction ? (
          <QrContainer loading />
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

      {loadingAction && (
        <Loading className="absolute inset-0 bg-background/40" />
      )}
    </>
  );
};

export default PaymentDetail;
