'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form';
import { Input } from '../ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import OrderSummary from '../order-summary/order-summary';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Textarea } from '../ui/textarea';
import { Toggle } from '../ui/toggle';
import { currentUserAtom } from '@/store/user.store';
import { useAtom, useAtomValue } from 'jotai';
import { deliveryInfoAtom } from '@/store/order.store';
import { changeDeliveryInfoAtom } from '@/store/order.store';
import { LoadingIcon } from '../ui/loading';
import { useRouter } from 'next/navigation';
import { IDeliveryInfo } from '@/types/order.types';

const formSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string(),
  email: z.string().email().min(1, { message: 'Email is required' }),
  phone: z
    .string()
    .regex(/[0-9]{6,}$/, 'invalid')
    .min(1, { message: 'Phone is required' }),
  city: z.string().min(1, { message: 'City is required' }),
  district: z.string().min(1, { message: 'District is required' }),
  street: z.string().min(1, { message: 'Street is required' }),
  detail: z.string().min(1, { message: 'Detailed address is required' }),
  haveBaby: z.boolean(),
  callBefore: z.boolean(),
  onlyAfternoon: z.boolean(),
  billType: z.string(),
  registerNumber: z.string().nullable()
});

const AddressForm = () => {
  const {
    firstName = '',
    lastName = '',
    email = '',
    phone = ''
  } = useAtomValue(currentUserAtom) || {};
  const deliveryInfo = useAtomValue(deliveryInfoAtom);
  const [loading, changeDeliveryInfo] = useAtom(changeDeliveryInfoAtom);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: {
      firstName,
      lastName,
      email,
      phone,
      city: '',
      district: '',
      street: '',
      detail: '',
      haveBaby: false,
      callBefore: false,
      onlyAfternoon: false,
      billType: '1',
      registerNumber: null,
      ...deliveryInfo
    }
  });

  function onSubmit(v: z.infer<typeof formSchema>) {
    changeDeliveryInfo(v);
    router.push('/verify');
  }

  return (
    <Form {...form}>
      <form
        className="md:grid md:grid-cols-12 md:gap-x-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="col-span-7">
          <div className="md:grid grid-cols-6 mb-10 md:mb-0 space-y-4 md:space-y-0 gap-x-4 gap-y-3 ">
            <h2 className="col-span-6 text-lg font-bold">
              Захиалагчийн мэдээлэл
            </h2>
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormLabel>Нэр</FormLabel>
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
                <FormItem className="col-span-3">
                  <FormLabel>Овог</FormLabel>
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
              name="phone"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormLabel>Утасны дугаар</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="0000 0000"
                      {...field}
                      autoComplete="tel-local"
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
                <FormItem className="col-span-3">
                  <FormLabel>И-Мэйл хаяг</FormLabel>
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
            <div />
            <Separator className="col-span-6 my-6" />
            <h2 className="col-span-6 text-lg font-bold">И-баримт авах</h2>

            <Separator className="col-span-6 my-6" />
            <h2 className="col-span-6 text-lg font-bold">Хүргэлтийн хаяг</h2>
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Хот</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Хот/Аймаг сонгоно уу"
                      {...field}
                      autoComplete="address-level1"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="district"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Дүүрэг</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Дүүрэг сонгоно уу"
                      {...field}
                      autoComplete="address-level2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Хороо</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Хороо/Баг сонгоно уу"
                      {...field}
                      autoComplete="address-level3"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="detail"
              render={({ field }) => (
                <FormItem className="col-span-6">
                  <FormLabel>Дэлгэрэнгүй хаяг</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Та хаягаа зөв дэлгэрэнгүй, тодорхой оруулаагүйгээс үүдэн хүргэлт удаашрах, эсвэл хүргэгдэхгүй байж болзошгүйг анхаарна уу"
                      {...field}
                      autoComplete="address-level4"
                      className="min-h-20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div />
            <Separator className="col-span-6 my-6" />
            <h2 className="col-span-6 text-lg font-bold">Нэмэлт Анхааруулга</h2>
            <FormField
              control={form.control}
              name="haveBaby"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormControl>
                    <Toggle
                      variant="outline"
                      size={'lg'}
                      className="w-full text-sm"
                      pressed={field.value}
                      onPressedChange={pressed => field.onChange(pressed)}
                    >
                      Нялх хүүхэдтэй
                    </Toggle>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="callBefore"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormControl>
                    <Toggle
                      variant="outline"
                      size={'lg'}
                      className="w-full text-sm"
                      pressed={field.value}
                      onPressedChange={pressed => field.onChange(pressed)}
                    >
                      Хүргэхийн өмнө заавал залгах
                    </Toggle>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="onlyAfternoon"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormControl>
                    <Toggle
                      variant="outline"
                      size={'lg'}
                      className="w-full text-sm"
                      pressed={field.value}
                      onPressedChange={pressed => field.onChange(pressed)}
                    >
                      Зөвхөн оройн цагаар хүргэх
                    </Toggle>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <OrderSummary className="col-span-5 md:sticky md:top-20 h-fit">
          <Button className="w-full" size="lg" disabled={loading}>
            {loading && <LoadingIcon />}
            Submit
          </Button>
        </OrderSummary>
      </form>
    </Form>
  );
};

export default AddressForm;
