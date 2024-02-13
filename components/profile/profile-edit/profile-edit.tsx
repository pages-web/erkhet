'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { useAtomValue } from 'jotai';
import { currentUserAtom } from '@/store/user.store';
import useUserEdit from '@/sdk/hooks/auth';

const formSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string(),
});

const ProfileEdit = () => {
  const { firstName, lastName, _id } = useAtomValue(currentUserAtom) || {};
  const { editUser, loading } = useUserEdit();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: {
      firstName: firstName || '',
      lastName: lastName || '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    editUser({ variables: { ...values, _id } });
  }

  return (
    <Form {...form}>
      <form
        className="space-y-6 relative max-w-xl"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="John"
                  {...field}
                  autoComplete="given-name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Doe"
                  {...field}
                  autoComplete="family-name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={loading}>Save Changes</Button>
      </form>
    </Form>
  );
};

export default ProfileEdit;
