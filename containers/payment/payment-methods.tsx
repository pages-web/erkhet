import { usePaymentConfig } from '@/sdk/queries/payment';
import { RadioGroup } from '@/components/ui/radio-group';
import PaymentType from './payment-type';
import { Loading } from '@/components/ui/loading';
import { useAtom } from 'jotai';
import { handleMethodAtom } from '@/store/payment.store';

const PaymentMethods = () => {
  const { loading, payments } = usePaymentConfig();
  const [selectedPayment, setSelectedPayment] = useAtom(handleMethodAtom);

  return (
    <>
      <h2 className="font-medium md:text-lg text-black/80 mb-4">
        Төлбөрийн төрлөө сонгоно уу
      </h2>
      {loading ? (
        <Loading className="pt-32" />
      ) : (
        <RadioGroup
          value={selectedPayment}
          onValueChange={value => setSelectedPayment(value)}
        >
          <div className="space-y-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {payments.map(({ kind, _id, name }) => (
                <PaymentType
                  selected={selectedPayment === kind}
                  kind={kind}
                  _id={_id}
                  name={name}
                />
              ))}
            </div>
          </div>
        </RadioGroup>
      )}
    </>
  );
};

export default PaymentMethods;
