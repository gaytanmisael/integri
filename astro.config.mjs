// @ts-check
import { defineConfig } from "astro/config"

import alpinejs from "@astrojs/alpinejs"
import netlify from "@astrojs/netlify"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import icon from "astro-icon"
import db from "@astrojs/db"

// https://astro.build/config
export default defineConfig({
  site: "https://integri.netlify.app/",
  integrations: [
    alpinejs(),
    sitemap(),
    tailwind({ applyBaseStyles: false }),
    icon()
    // db()
  ],
  output: "hybrid",
  adapter: netlify()
})
