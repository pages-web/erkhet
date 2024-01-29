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
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Password } from '@/components/ui/password';
import Link from 'next/link';
import { useLogin } from '@/sdk/hooks/auth';
import { toast } from 'sonner';

const formSchema = z.object({
  login: z
    .string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+|[0-9]{6,}$/, 'Invalid phone or email')
    .min(1, { message: 'Email is required' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      login: '',
      password: '',
    },
  });
  const { login, loading, clientPortalId } = useLogin();
  function onSubmit(values: z.infer<typeof formSchema>) {
    login({
      variables: { ...values, clientPortalId },
      onCompleted(data) {
        toast('Success');
      },
      onError(error) {
        toast(error.message);
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="login"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="john@doe.com"
                  {...field}
                  autoComplete="username"
                />
              </FormControl>
              {/* <FormDescription>
                Please enter your registered email
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between mb-1">
                <FormLabel>Нууц үг</FormLabel>
                <Button
                  asChild
                  variant="link"
                  className="py-1 h-auto font-normal px-0"
                >
                  <Link href="/forgot">Mартсан?</Link>
                </Button>
              </div>

              <FormControl>
                <Password {...field} autoComplete="current-password" />
              </FormControl>
              {/* <FormDescription>Please enter your password</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" size="lg" disabled={loading}>
          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
