import {performRequest} from '@/lib/datocms'
import {Navigation, Layout} from '@/types/types'
import {useQuery} from '@tanstack/react-query'

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
    }
  }`

interface Data {
  allCategoryNavs: Navigation[]
  layout: Layout
}

export function getInitData() {
  const fetchInitData = async (): Promise<Data> => {
    return await performRequest<Data>({query: PAGE_CONTENT_QUERY})
  }

  const { data, error, isLoading } = useQuery<Data, Error>(['initData'], fetchInitData, {
    cacheTime: Infinity,
    onError: (err) => {
      console.error('Error fetching navigation data:', err)
    },
  })

  return { ...data, error, isLoading }
}
