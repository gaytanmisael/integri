import { createEnv } from "@t3-oss/env-core"
import { z } from "astro:schema"

export const env = createEnv({
  clientPrefix: "PUBLIC_",
  client: {
    PUBLIC_ACCESS_TOKEN: z.string().min(1),
    PUBLIC_SHOPIFY_SHOP: z.string().min(1)
  },
  runtimeEnv: import.meta.env,
  skipValidation: import.meta.env.SKIP_ENV_VALIDATION === "development"
})
