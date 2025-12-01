import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    SITE_URL: z.string().optional(),
    RESEND_API_KEY: z.string().optional()
  },
  runtimeEnv: {
    SITE_URL: process.env.SITE_URL,
    RESEND_API_KEY: process.env.RESEND_API_KEY
  }
});
