import { z } from 'zod';

export const phoneZod = z
  .string()
  .regex(/^\d{8}$/, 'Invalid Phone number')
  .min(1, { message: 'Phone is required' });

export const passwordZod = z
  .string()
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    'Password must contain at least one lowercase letter, one uppercase letter, and be at least 8 characters long.'
  )
  .min(1, { message: 'Password is required' });
