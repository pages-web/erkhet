'use client';
import { useAtomValue } from 'jotai';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import {
  billTypeAtom,
  deliveryInfoAtom,
  registerNumberAtom
} from '@/store/order.store';

const VerifyAddress = () => {
  const {
    firstName,
    lastName,
    email,
    phone,
    city,
    district,
    street,
    detail,
    companyName
  } = useAtomValue(deliveryInfoAtom) || {};
  const billType = useAtomValue(billTypeAtom);
  const registerNumber = useAtomValue(registerNumberAtom);

  return (
    <>
      <div className="py-6">
        <div className="text-black/60 mb-3">
          Захиалагч:{' '}
          {billType === '1' ? 'Хувь хүн' : `${registerNumber} - ${companyName}`}
        </div>
        <div className="font-semibold text-sm">
          {firstName} {lastName || ''}
        </div>
        <div>
          {email} {phone}
        </div>
      </div>
      <Separator />
      <div className="py-6">
        <div className="text-black/60 mb-3">Хүргэлтийн хаяг</div>
        <div>
          {city}, {district} дүүрэг, {street}, {detail}
        </div>
        <div className="flex gap-4 mt-4">
          <Badge
            variant="secondary"
            className="py-1.5 px-4 text-sm font-medium"
          >
            {firstName} {lastName}
          </Badge>
          <Badge
            variant="secondary"
            className="py-1.5 px-4 text-sm font-medium"
          >
            {phone}
          </Badge>
        </div>
      </div>
    </>
  );
};

export default VerifyAddress;
