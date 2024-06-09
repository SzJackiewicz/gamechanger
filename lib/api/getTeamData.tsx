/* eslint-disable react-hooks/rules-of-hooks */
import { performRequest } from '@/lib/datocms'
import { useQuery } from '@tanstack/react-query'
import {StructuredText} from "datocms-structured-text-utils";

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
  about {
    content {
      value
      blocks
    }
    doc {
      name
      file {
        url
      }
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

export type File = {
    name: string,
    file: {
        url: string
    }
}

interface Data {
    allPeople: Person[]
    about: {
        content: StructuredText
        doc: File[]
    }
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
