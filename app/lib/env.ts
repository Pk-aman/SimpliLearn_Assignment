import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_AIRTABLE_KEY: z.string().min(1, 'AIRTABLE_KEY is required'),
  NEXT_PUBLIC_DATABASE_ID: z.string().min(1, 'BASE_NAME is required'),
  NEXT_PUBLIC_BASE_URL: z.string().min(1, 'BASE_URL is required'),
});

// Validate and export environment variables
function getEnv() {
  const parsed = envSchema.safeParse({
    NEXT_PUBLIC_AIRTABLE_KEY: process.env.NEXT_PUBLIC_AIRTABLE_KEY,
    NEXT_PUBLIC_DATABASE_ID: process.env.NEXT_PUBLIC_DATABASE_ID,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  });

  if (!parsed.success) {
    console.error('❌ Invalid environment variables:', parsed.error.flatten().fieldErrors);
    throw new Error('Invalid environment variables');
  }

  return parsed.data;
}

export const env = getEnv();
