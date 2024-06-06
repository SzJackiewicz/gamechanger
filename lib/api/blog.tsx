import {performRequest} from '@/lib/datocms'
import {useQuery} from '@tanstack/react-query'

const PAGE_CONTENT_QUERY = `
query Home($slug: String!) {
  post(filter: {slug: {eq: $slug}}) {
    slug
    subtitle
    title
    content {
      value
      blocks {
        __typename
        ... on ImageBlockRecord {
          id
          image { url alt }
        }
      }
    }
    coverImage {
      url
    }
  }
}
`

interface Data {
    slug: string,
    subtitle: string,
    content: {
        value: {
            document: {
                children: {
                  children: {
                      type: string,
                      value: string
                  }  []
                }[]
            }
        }
    },
    title: string
    coverImage: {
        url: string
    }
}

export function getBlogData(slug: string) {
    const fetchInitData = async (): Promise<Data> => {
        return await performRequest<Data>({
            query: PAGE_CONTENT_QUERY,
            variables: { slug }
        })
    }

    const { data, error, isLoading } = useQuery<Data, Error>(['blog-' + slug], fetchInitData, {
        cacheTime: Infinity,
        onError: (err) => {
            console.error('Error fetching navigation data:', err)
        },
    })

    return { ...data, error, isLoading }
}
