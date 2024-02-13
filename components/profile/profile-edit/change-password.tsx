'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import PhoneNumber from '@/components/ui/phone-number';
import * as z from 'zod';
import { currentUserAtom } from '@/store/user.store';
import { useAtomValue } from 'jotai';
import { SmartphoneIcon } from 'lucide-react';
import useUserEdit from '@/sdk/hooks/auth';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Password } from '@/components/ui/password';

const passwordValidate = z
  .string()
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    'Password must contain at least one lowercase letter, one uppercase letter, and be at least 8 characters long.'
  )
  .min(1, { message: 'Password is required' });

const formSchema = z.object({
  password: passwordValidate,
  newPassword: passwordValidate,
  verifyPassword: passwordValidate,
});

const ChangePassword = () => {
  const { phone } = useAtomValue(currentUserAtom) || {};

  const { editUser, loading } = useUserEdit();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        className="space-y-6 md:grid grid-cols-2 gap-x-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Одоогийн нууц үг</FormLabel>
              <FormControl>
                <Password {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div />

        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Шинэ нууц үг</FormLabel>
              <FormControl>
                <Password {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="verifyPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Шинэ нууц үг баталгаажуулах</FormLabel>
              <FormControl>
                <Password {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="border border-transparent flex items-end ">
          <Button className="mt-auto w-full" size="lg">
            Дугаараа солих
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ChangePassword;
