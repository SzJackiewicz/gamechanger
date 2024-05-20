export type FocusOnMotion = {
  photo: {
    url: string
  },
  placeholder: string
}

export type Navigation = {
  label: string
  name: string
  slug: string
  subMenu: {
    label: string
    name: string
    slug: string
  }[]
}

export type Layout = {
  footerLogo: {
    url: string
  },
  footerLogoAlt: string,
  footerSubtitle: string,
  iban: string,
  swift: string
}
