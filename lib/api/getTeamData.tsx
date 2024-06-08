/* eslint-disable react-hooks/rules-of-hooks */
import { performRequest } from '@/lib/datocms'
import { useQuery } from '@tanstack/react-query'

const PAGE_CONTENT_QUERY = `
query MyQuery {
  allPeople {
    name
    positionitem {
      id
      name
    }
    picture {
      url
    }
  }
}
`
export type Person = {
    name: string,
    positionitem?: {
        id?: string,
        name?: string
    },
    picture: {
        url: string
    }
}

interface Data {
    allPeople: Person[]
}

export function getTeamData() {
    const fetchInitData = async (): Promise<Data> => {
        return await performRequest<Data>({ query: PAGE_CONTENT_QUERY })
    }

    const { data, error, isLoading } = useQuery<Data, Error>(['getTeamData'], fetchInitData, {
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
        onError: (err) => {
            console.error('Error fetching navigation data:', err)
        },
    })

    return { ...data, error, isLoading }
}
