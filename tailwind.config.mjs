/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          lg: "2rem"
        }
      },
      colors: {
        "breaker-bay": "hsl(var(--breaker-bay) / <alpha-value>)",
        shark: "hsl(var(--shark) / <alpha-value>)",
        "catskill-white": "hsl(var(--catskill-white) / <alpha-value>)",
        alto: "hsl(var(--alto) / <alpha-value>)",
        "blue-chill": "hsl(var(--blue-chill) / <alpha-value>)",
        tiber: "hsl(var(--tiber) / <alpha-value>)",
        affair: "hsl(var(--affair) / <alpha-value>)",
        "pale-sky": "hsl(var(--pale-sky) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["Archivo Variable", ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        headerBounce: {
          "0%": {
            opacity: 0,
            transform: "translateY(-100%)"
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)"
          }
        }
      },
      animation: {
        headerBounce: "headerBounce .8s"
      }
    }
  },
  plugins: []
}
