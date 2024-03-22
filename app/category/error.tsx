'use client'; // Error components must be Client Components

import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container py-32 flex justify-center">
      <h2>Алдаа гарлаа.</h2>
      <Button onClick={() => reset()}>Дахин оролдох</Button>
    </div>
  );
}
