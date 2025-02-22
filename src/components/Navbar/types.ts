export interface INavbarLink {
  name: string
  href: string
}

export type TNavbarProps = Record<'links', INavbarLink[]>