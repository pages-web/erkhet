'use client';
import { useAtom, useAtomValue } from 'jotai';
import { Button } from '../ui/button';
import { donateItemAtom, donateViewAtom } from '@/store/donate.store';
import { toast } from 'sonner';
import { ValidateProduct } from '@/containers/donate/donate';

const Steps = ({
  description,
  validateProduct,
}: {
  description?: string;
  validateProduct: ValidateProduct;
}) => {
  const item = useAtomValue(donateItemAtom);
  const [view, setView] = useAtom(donateViewAtom);

  return (
    <div className="flex gap-2">
      <Button
        size="sm"
        variant={view === '' ? 'default' : 'outline'}
        className="h-4 w-4 px-0 rounded-full"
        onClick={() => setView('')}
      />
      <Button
        size="sm"
        variant={view === 'info' ? 'default' : 'outline'}
        className="h-4 w-4 px-0 rounded-full"
        onClick={() => validateProduct(() => setView('info'))}
      />
      <Button
        size="sm"
        variant={view === 'payment' ? 'default' : 'outline'}
        className="h-4 w-4 px-0 rounded-full"
        onClick={() => {
          validateProduct(() => {
            if (!description) {
              toast.error('Мэдээлэлээ оруулана уу');
              return setView('info');
            }
            setView('payment');
          });
        }}
      />
      <Button
        size="sm"
        variant={view === 'success' ? 'default' : 'outline'}
        className="h-4 w-4 px-0 rounded-full"
      />
    </div>
  );
};

export default Steps;
