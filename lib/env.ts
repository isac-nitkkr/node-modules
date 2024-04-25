import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('development'),

    DATABASE_URL: z.string().url(),

    NEXTAUTH_URL: z.string().url(),
    NEXTAUTH_SECRET: z.string(),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),

    AWS_ACCESS_KEY_ID: z.string(),
    AWS_ACCESS_KEY_SECRET: z.string(),
    AWS_S3_REGION: z.string(),
    AWS_PUBLIC_S3_NAME: z.string(),
    AWS_PRIVATE_S3_NAME: z.string(),
  },
  client: {
    NEXT_PUBLIC_AWS_S3_URL: z.string().url(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_AWS_S3_URL: process.env.NEXT_PUBLIC_AWS_S3_URL,
  },

  emptyStringAsUndefined: true,
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
