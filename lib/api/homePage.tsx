import {performRequest} from '@/lib/datocms'
import {FocusOnMotion} from '@/types/types'
import {useQuery} from '@tanstack/react-query'

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
      subtitle
      coverImage {
        url
      }
    }
    subposts {
      subtitle
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

interface Data {
    allFocusonemotionitems: FocusOnMotion[]
    allPartnerIds: {
        placeholder: string
        photo: {
            url: string
        }
    }[]
    sgPost: {
        sgMain: {
            subtitle: string,
            title: string
            coverImage: {
                url: string
            }
        },
        subposts: {
            subtitle: string,
            title: string
        }[]
    }
}

export function getInitHomePageData() {
    const fetchInitData = async (): Promise<Data> => {
        return await performRequest<Data>({query: PAGE_CONTENT_QUERY})
    }

    const { data, error, isLoading } = useQuery<Data, Error>(['initHomePageData'], fetchInitData, {
        cacheTime: Infinity,
        onError: (err) => {
            console.error('Error fetching navigation data:', err)
        },
    })
console.log({data})
console.log({error})
    return { ...data, error, isLoading }
}
