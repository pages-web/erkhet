'use client';

import { cn, createUrl } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';

export default function Search({ className }: { className?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set('q', search.value);
    } else {
      newParams.delete('q');
    }

    router.push(createUrl('/category', newParams));
  }

  return (
    <form onSubmit={onSubmit} className={cn('relative w-full', className)}>
      <Input
        key={searchParams?.get('q')}
        type="text"
        name="search"
        placeholder="Бүтээгдэхүүн хайх..."
        autoComplete="off"
        defaultValue={searchParams?.get('q') || ''}
        className="w-full text-sm font-medium text-black placeholder:text-neutral-500 bg-background px-4 focus-visible:ring-0"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <SearchIcon className="h-4 w-4 text-black" />
      </div>
    </form>
  );
}
