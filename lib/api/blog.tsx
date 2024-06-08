/* eslint-disable react-hooks/rules-of-hooks */
import { performRequest } from '@/lib/datocms'
import { useQuery } from '@tanstack/react-query'

const BLOG_CONTENT_QUERY = `
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

const BLOGS_CONTENT_QUERY = `
query Home {
    allPosts {
        slug
        title
        subtitle
        coverImage {
            url
        }
        content {
            value
        }
    }
}
`

interface Data {
  slug: string
  subtitle: string
  content: {
    value: {
      document: {
        children: {
          children: {
            type: string
            value: string
          }[]
        }[]
      }
    }
  }
  title: string
  coverImage: {
    url: string
  }
}

export interface POST {
  post: Data
}

interface POSTS {
  allPosts: Data[]
}

export function getBlogData(slug: string | string[]) {
  const fetchInitData = async (): Promise<POST> => {
    return await performRequest<POST>({
      query: BLOG_CONTENT_QUERY,
      variables: { slug },
    })
  }

  const { data, error, isLoading } = useQuery<POST, Error>(['blog-' + slug], fetchInitData, {
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
    onError: (err) => {
      console.error('Error fetching navigation data:', err)
    },
  })

  return { ...data, error, isLoading }
}

export function getBlogsData() {
  const fetchInitData = async (): Promise<POSTS> => {
    return await performRequest<POSTS>({
      query: BLOGS_CONTENT_QUERY,
    })
  }

  const { data, error, isLoading } = useQuery<POSTS, Error>(['blogs'], fetchInitData, {
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
    onError: (err) => {
      console.error('Error fetching navigation data:', err)
    },
  })

  return { ...data, error, isLoading }
}
