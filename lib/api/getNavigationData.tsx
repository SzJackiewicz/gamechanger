import { performRequest } from '@/lib/datocms'
import { Navigation } from '@/types/types'
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
  }`

interface Data {
  allCategoryNavs: Navigation[]
}

export function useNavigationData() {
  const fetchNavigationData = async (): Promise<Navigation[]> => {
    const data = await performRequest<Data>({ query: PAGE_CONTENT_QUERY })
    return data.allCategoryNavs
  }

  const { data, error, isLoading } = useQuery<Navigation[], Error>(['navigationData'], fetchNavigationData, {
    cacheTime: Infinity,
    onError: (err) => {
      console.error('Error fetching navigation data:', err)
    },
  })

  return { data, error, isLoading }
}
