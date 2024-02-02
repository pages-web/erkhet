'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { readFile } from '@/lib/utils';
import { useCurrentUser } from '@/sdk/queries/auth';
import { loadingUserAtom } from '@/store/user.store';
import { useAtom } from 'jotai';
import { UserIcon, Loader2Icon } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

const CurrentUser = () => {
  const [loading, setLoading] = useAtom(loadingUserAtom);
  const { currentUser } = useCurrentUser();

  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="h-9 w-9 flex items-center justify-center">
        <Loader2Icon className="h-5 w-5 animate-spin" />
      </div>
    );
  }

  if (currentUser) {
    const { firstName, attachment, lastName } = currentUser;
    return (
      <Avatar asChild>
        <Link href="/profile">
          <AvatarImage
            src={readFile(attachment?.url)}
            alt={currentUser.firstName}
          />
          <AvatarFallback>
            {firstName[0]}
            {lastName[0]}
          </AvatarFallback>
        </Link>
      </Avatar>
    );
  }

  return (
    <Button
      size="icon"
      variant={'ghost'}
      className="hover:bg-white/10 hover:text-white"
      asChild
    >
      <Link href="/login">
        <UserIcon className="h-5 w-5" />
      </Link>
    </Button>
  );
};

export default CurrentUser;
