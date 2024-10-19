import type { SocialLink } from "./SocialLink"

export type SiteConfig = {
  title: string
  description: string
  languageCode: string
  languageLang: string
  image: {
    src: string
    alt: string
  }
  email: string
  phone?: string
  phone_alt?: string
  social?: SocialLink[]
}
