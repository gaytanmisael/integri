import type { Link } from "./Link"

interface SubLink extends Link {
  description?: string
  icon?: string
}

export interface MenuItem extends Link {
  children?: SubLink[]
}

export interface Menu extends Array<MenuItem> {}
