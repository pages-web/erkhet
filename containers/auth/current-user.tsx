'use client';

import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/sdk/queries/auth';
import { UserIcon, Loader2Icon } from 'lucide-react';
import Link from 'next/link';

const CurrentUser = () => {
  const { currentUser, loading } = useCurrentUser();

  if (loading) {
    return (
      <Button
        size="icon"
        variant={'ghost'}
        disabled
        className="hover:bg-white/10 hover:text-white"
      >
        <Loader2Icon className="h-5 w-5 animate-spin" />
      </Button>
    );
  }

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
