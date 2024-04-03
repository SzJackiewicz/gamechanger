import { performRequest, PerformRequestParams } from '@/lib/datocms'

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

interface CategoryNav {
  label: string
  name: string
  slug: string
}

interface Data {
  allCategoryNavs: CategoryNav[]
}

function getPageRequest(isEnabled: boolean): PerformRequestParams {
  return {
    query: PAGE_CONTENT_QUERY,
    includeDrafts: isEnabled,
    variables: {},
    revalidate: 0,
  }
}

export async function getNavigationData() {
  try {
    const pageRequest = getPageRequest(false)
    const data = await performRequest<Data>(pageRequest)

    return data.allCategoryNavs
  } catch (error) {
    console.error('Error fetching navigation data:', error)
    return []
  }
}
