import { usePaymentConfig } from '@/sdk/queries/payment';
import { RadioGroup } from '@/components/ui/radio-group';
import { useState } from 'react';
import PaymentType from './paymentType';
import { Loading } from '@/components/ui/loading';
import { Button } from '@/components/ui/button';
import { Undo2Icon } from 'lucide-react';

const Payment = () => {
  const { loading, payments } = usePaymentConfig();
  const [selectedPayment, setSelectedPayment] = useState('');

  if (loading) return <Loading />;

  if (selectedPayment)
    return (
      <>
        <h2 className="font-medium text-lg text-black/80 mb-4 flex gap-4 items-center">
          <span>
            <span className="capitalize">{selectedPayment}</span> - Төлбөрөө
            төлнө үү
          </span>{' '}
        </h2>
        <Button variant="secondary" onClick={() => setSelectedPayment('')}>
          <Undo2Icon className="h-5 w-5" />
          <span className="ml-2">Болих</span>
        </Button>
      </>
    );

  return (
    <>
      <h2 className="font-medium text-lg text-black/80 mb-4">
        Төлбөрийн төрлөө сонгоно уу
      </h2>
      <RadioGroup
        value={selectedPayment}
        onValueChange={value => setSelectedPayment(value)}
      >
        <div className="space-y-3">
          <div className="grid grid-cols-4 gap-4">
            {payments.map(({ kind }) => (
              <PaymentType
                selected={selectedPayment === kind}
                kind={kind}
                _id={'3'}
                name={'Qpay'}
              />
            ))}
          </div>
        </div>
      </RadioGroup>
    </>
  );
};

export default Payment;
