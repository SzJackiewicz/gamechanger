/* eslint-disable react-hooks/rules-of-hooks */
import { performRequest } from '@/lib/datocms'
import { FocusOnMotion } from '@/types/types'
import { useQuery } from '@tanstack/react-query'

const PAGE_CONTENT_QUERY = `
query Home {
  allFocusonemotionitems {
    placeholder
    photo {
      url
    }
  }
  sgPost {
    sgMain {
      title
      slug
      subtitle
      coverImage {
        url
      }
    }
    subposts {
      subtitle
      slug
      title
      coverImage {
        url
      }
    }
  }
allPartnerIds {
    placeholder
    photo {
      url
    }
  }
}
`

export interface Post {
  slug: string
  subtitle: string
  title: string
  coverImage: {
    url: string
  }
}

export interface Data {
  allFocusonemotionitems: FocusOnMotion[]
  allPartnerIds: {
    placeholder: string
    photo: {
      url: string
    }
  }[]
  sgPost: {
    sgMain: Post
    subposts: Post[]
  }
}

export function getInitHomePageData() {
  const fetchInitData = async (): Promise<Data> => {
    return await performRequest<Data>({ query: PAGE_CONTENT_QUERY })
  }

  const { data, error, isLoading } = useQuery<Data, Error>(['initHomePageData'], fetchInitData, {
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
    onError: (err) => {
      console.error('Error fetching navigation data:', err)
    },
  })

  return { ...data, error, isLoading }
}
