export type FocusOnMotion = {
    photo: {
        url: string
    },
    name: string,
    description: string
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
    swift: string,
    socialMediaLinks: {
        name: string,
        types: string,
        url: string
    }[]
}

export type Address = {
    name: string,
    city: string
    street: string,
    zipcode: string
}

export type Contact = {
    title: string,
    description: string,
    email: string,
    tel: string
}

export type Register = {
    krs: string,
    nip: string,
    regon: string
}