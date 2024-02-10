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
import { useRegister } from '@/sdk/hooks/auth';
import { toast } from 'sonner';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { InfoIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string(),
  email: z.string().email().min(1, { message: 'Email is required' }),
  phone: z
    .string()
    .regex(/[0-9]{6,}$/, 'invalid')
    .min(1, { message: 'Phone is required' }),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
      'Password must contain at least one lowercase letter, one uppercase letter, and be at least 8 characters long.'
    )
    .min(1, { message: 'Password is required' }),
});

const RegisterForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
    },
  });
  const { register, loading, clientPortalId } = useRegister();

  function onSubmit(values: z.infer<typeof formSchema>) {
    register({
      variables: { ...values, clientPortalId },
      onCompleted(data) {
        toast.success('Congratulations, You registered successfully', {
          description: 'Таны имэйл рүү баталгаажуулах холбоос илгээлээ.',
        });
        router.push('/login');
      },
      onError(error) {
        toast.error(error.message);
      },
    });
  }
  return (
    <Form {...form}>
      <form
        className="md:grid grid-cols-2 space-y-4 md:space-y-0 gap-y-6 gap-x-3 relative"
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
                  className="h-12"
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
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="john@doe.com"
                  {...field}
                  autoComplete="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input
                  placeholder="0000 0000"
                  {...field}
                  autoComplete="tel-national"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Password {...field} autoComplete="new-password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full col-span-2" size="lg">
          Бүртгүүлэх
        </Button>
        <Alert className="col-span-2">
          <InfoIcon className="h-4 w-4" />
          <AlertTitle className="text-sm">Санамж!</AlertTitle>
          <AlertDescription className="text-xs">
            Та бүртгүүлэх товчийг дарснаар таныг тус вебсайтын
            <Button
              variant="link"
              asChild
              className="h-auto px-0 py-0 mx-1 text-foreground"
              size="sm"
            >
              <Link href="/terms-of-service">үйлчилгээний нөхцөл</Link>
            </Button>
            болон{' '}
            <Button
              variant="link"
              asChild
              className="h-auto px-0 py-0 mx-1 text-foreground"
              size="sm"
            >
              <Link href="/terms-of-service">нууцлалын бодлогыг</Link>
            </Button>
            хүлээн зөвшөөрсөнд тооцно.
          </AlertDescription>
        </Alert>
      </form>
    </Form>
  );
};

export default RegisterForm;
