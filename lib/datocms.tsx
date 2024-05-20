import axios from 'axios'

type ApiResponse<T> = {
  data: T
}

export interface PerformRequestParams {
  query: string
  variables?: { [key: string]: unknown }
  includeDrafts?: boolean
  excludeInvalid?: boolean
  visualEditingBaseUrl?: string | null
  revalidate?: number
}

export async function performRequest<T>({
  query,
  variables = {},
  includeDrafts = false,
  excludeInvalid = false,
  visualEditingBaseUrl,
  revalidate,
}: PerformRequestParams): Promise<T> {
  const headers = {
    'Authorization': `Bearer b00ca3cd15d1df8062445dda3aa52d`,
    'Content-Type': 'application/json',
    ...(includeDrafts ? { 'X-Include-Drafts': 'true' } : {}),
    ...(excludeInvalid ? { 'X-Exclude-Invalid': 'true' } : {}),
    ...(visualEditingBaseUrl ? { 'X-Visual-Editing': 'vercel-v1', 'X-Base-Editing-Url': visualEditingBaseUrl } : {}),
    ...(process.env.NEXT_DATOCMS_ENVIRONMENT ? { 'X-Environment': process.env.NEXT_DATOCMS_ENVIRONMENT } : {}),
  }

  const body = JSON.stringify({ query, variables, revalidate })

  const response = await axios.post<ApiResponse<T>>('https://graphql.datocms.com/', body, { headers })

  console.log('REQ DO DATOCMS')
  console.log({response})
  if (response.status !== 200) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`)
  }

  return response.data.data
}
