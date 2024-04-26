import { QueryClient, QueryClientConfig } from '@tanstack/react-query'

const queryClientOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: typeof window === 'undefined' ? undefined : Infinity,
    },
  },
}

let queryClient: QueryClient

export const getQueryClient = (): QueryClient => {
  if (typeof window === 'undefined') {
    return new QueryClient(queryClientOptions)
  }

  if (queryClient) {
    return queryClient
  }

  return (queryClient = new QueryClient(queryClientOptions))
}
