'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { readFile } from '@/lib/utils';
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

  if (currentUser) {
    const { firstName, attachment, lastName } = currentUser;
    return (
      <Link href="/profile">
        <Avatar>
          <AvatarImage
            src={readFile(attachment?.url)}
            alt={currentUser.firstName}
          />
          <AvatarFallback>
            {firstName[0]}
            {lastName[0]}
          </AvatarFallback>
        </Avatar>
      </Link>
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
