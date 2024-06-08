/* eslint-disable react-hooks/rules-of-hooks */
import { performRequest } from '@/lib/datocms'
import { Navigation, Layout, Address, Contact, Register } from '@/types/types'
import { useQuery } from '@tanstack/react-query'

const PAGE_CONTENT_QUERY = `
  query Home {
    allCategoryNavs {
      label
      name
      slug
      subMenu {
        label
        name
        slug
      }
    }
    layout {
      footerLogo {
        url
      }
      footerLogoAlt
      footerSubtitle(markdown: false)
      iban
      swift
      socialMediaLinks {
        name
        types
        url
      }
    }
    address {
        city
        name
        street
        zipcode
    }
    contact {
      title
      description
      email
      tel
    }
    register {
      krs
      nip
      regon
    }
  }`

interface Data {
  allCategoryNavs: Navigation[]
  layout: Layout
  address: Address
  contact: Contact
  register: Register
}

export function getInitData() {
  const fetchInitData = async (): Promise<Data> => {
    return await performRequest<Data>({ query: PAGE_CONTENT_QUERY })
  }

  const { data, error, isLoading } = useQuery<Data, Error>(['initData'], fetchInitData, {
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
    onError: (err) => {
      console.error('Error fetching navigation data:', err)
    },
  })

  return { ...data, error, isLoading }
}
