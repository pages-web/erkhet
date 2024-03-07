'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { useResetPassword } from '@/sdk/hooks/auth';
import { LoadingIcon } from '@/components/ui/loading';
import { CheckCircle2Icon } from 'lucide-react';
import { passwordZod } from '@/lib/zod';
import { Password } from '@/components/ui/password';

const formSchema = z.object({
  password: passwordZod
});

const ResetPasswordForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: ''
    }
  });

  const { loading, resetPassword, clientPortalId, success } =
    useResetPassword();

  function onSubmit(values: z.infer<typeof formSchema>) {
    resetPassword({
      variables: { newPassword: values.password, clientPortalId }
    });
  }

  if (success) {
    return (
      <div className="flex items-center flex-col">
        <CheckCircle2Icon
          className="text-green-500 animate-bounce h-12 w-12"
          strokeWidth={1.5}
        />
        <p className="text-base font-medium my-1 text-center">
          Танд нууц үг солих холбоос бүхий имэйл илгээлээ.
        </p>
        <p className="text-sm text-neutral-500">Та имэйл хаяг aa шалгана уу.</p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        className="space-y-4 relative"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <Password {...field} autoComplete="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full col-span-2" size="lg" disabled={loading}>
          {loading && <LoadingIcon />}
          Нууц үг сэргээх
        </Button>
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
