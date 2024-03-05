import { z } from 'zod';

export const phoneZod = z
  .string()
  .regex(/^\d{8}$/, 'Invalid Phone number')
  .min(1, { message: 'Phone is required' });
