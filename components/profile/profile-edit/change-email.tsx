'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import * as z from 'zod';
import { currentUserAtom } from '@/store/user.store';
import { useAtomValue } from 'jotai';
import { CheckCircle, MailIcon } from 'lucide-react';
import { useUserEdit } from '@/sdk/hooks/auth';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  email: z.string().email()
});

const ChangeEmail = () => {
  const { email } = useAtomValue(currentUserAtom) || {};
  const { editUser, loading } = useUserEdit();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: {
      email: email || ''
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        className="flex items-center justify-center py-12 flex-col gap-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <MailIcon className="h-8 w-8 text-black/60" strokeWidth={1.7} />
        <div className="text-center space-y-1 mb-4">
          <h3 className="font-medium">Таны цахим хаяг баталгаажлаа</h3>
          <div className="text-sm text-black/50">
            Хэрэв та цахим хаягаа өөрчлөхийг хүсэж байгаа бол "Цахим хаяг солих"
            товч дээр дарна уу
          </div>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="John@doe.mn"
                    {...field}
                    autoComplete="email"
                    className="min-w-80 h-12 pl-6 pr-12 bg-secondary disabled:opacity-100"
                    value={email}
                    disabled
                  />
                  <CheckCircle className="h-5 w-5 absolute top-1/2 right-4 -translate-y-1/2" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button>Цахим хаяг солих</Button>
      </form>
    </Form>
  );
};

export default ChangeEmail;
