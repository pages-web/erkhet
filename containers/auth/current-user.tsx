'use client';

import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/sdk/queries/auth';
import { UserIcon } from 'lucide-react';
import Link from 'next/link';

const CurrentUser = () => {
  const { currentUser, loading } = useCurrentUser();
  return (
    <Button
      size="icon"
      variant={'ghost'}
      className="hover:bg-white/10 hover:text-white"
      asChild
    >
      <Link href={currentUser ? '/profile' : '/login'}>
        <UserIcon className="h-5 w-5" />
      </Link>
    </Button>
  );
};

export default CurrentUser;
