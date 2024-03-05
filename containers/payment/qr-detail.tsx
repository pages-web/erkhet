import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { BanIcon, InfoIcon } from 'lucide-react';
import Image from '@/components/ui/image';
import { DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useSetAtom } from 'jotai';
import { handleMethodAtom } from '@/store/payment.store';
import BackButton from './back-button';
import CheckPayment from './check-payment';

const QrDetail = ({
  errorDescription,
  status,
  qrCode,
  id
}: {
  errorDescription?: string;
  status: string;
  qrCode: string;
  id: string;
}) => {
  return (
    <>
      <QrContainer error={errorDescription}>
        {qrCode ? (
          <Image
            src={qrCode}
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            height={256}
            width={256}
            alt=""
          />
        ) : (
          <BanIcon
            className="h-20 w-20 text-input absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 "
            strokeWidth={1}
          />
        )}
      </QrContainer>
      <DialogFooter className="sm:justify-center gap-2">
        <BackButton />
        <CheckPayment id={id} />
      </DialogFooter>
    </>
  );
};

export const QrContainer = ({
  children,
  loading,
  error
}: React.PropsWithChildren & { loading?: boolean; error?: string }) => (
  <>
    <div className="p-4">
      <div className="relative aspect-square mx-auto max-w-80">
        <div className="border rounded-lg absolute inset-0"></div>
        <div className="w-full h-full bg-white rounded-3xl absolute inset-0">
          {children}
        </div>
      </div>
    </div>
    {error ? (
      <Alert variant="destructive">
        <InfoIcon className="h-4 w-4 rotate-180" />
        <AlertTitle>Алдаа гарлаа</AlertTitle>
        <AlertDescription className="text-xs">{error}</AlertDescription>
      </Alert>
    ) : (
      <Alert variant="warning">
        <InfoIcon className="h-4 w-4" />
        <AlertDescription className="text-xs">
          Төлбөр төлөгдсөний дараа таны захиалга идэвхэждэг болохыг анхаараарай!
          Та өөрийн банкны аппликейшныг ашиглан QR кодыг уншуулж төлбөр төлөх
          боломжтой
        </AlertDescription>
      </Alert>
    )}
    {loading && (
      <DialogFooter className="sm:justify-center gap-2">
        <BackButton disabled />
        <Button size="lg" className="flex-1" disabled>
          Төлбөр шалгах
        </Button>
      </DialogFooter>
    )}
  </>
);

export default QrDetail;
