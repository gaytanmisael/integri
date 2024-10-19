import { createEnv } from "@t3-oss/env-core"
import { z } from "astro:schema"

export const env = createEnv({
  server: {
    PRIVATE_ACCESS_TOKEN: z.string().min(1)
  },
  runtimeEnv: import.meta.env,
  skipValidation: import.meta.env.SKIP_ENV_VALIDATION === "development"
})
