import { z } from 'zod';

export const phoneZod = z
  .string()
  .regex(/^\d{8}$/, 'Invalid Phone number')
  .min(1, { message: 'Phone is required' });

export const passwordZod = z
  .string()
  .min(1, { message: 'Нууц үгээ оруулна уу' })
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    'Нууц үг нь дор хаяж нэг жижиг үсэг, нэг том үсэг оруулсан 8 тэмдэгтээс бүрдэх ёстой.'
  );
