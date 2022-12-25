import { useQuery, UseQueryResult } from 'react-query'
import { KEY_NEWS_DATA } from '../assets/constants'
import { useEffect, useState } from 'react'

interface UseNewsDataResponse {
  news: NewsItemType | null
  isLoading: boolean
  isError: boolean
}

export interface NewsItemType {
  joke: string
}

export const UseNewsData = (): UseNewsDataResponse => {
  const [news, setNews] = useState<NewsItemType | null>(null)
  const { data, isLoading, isError }: UseQueryResult<NewsItemType> = useQuery(
    [KEY_NEWS_DATA],
    async () =>
      await fetch('https://geek-jokes.sameerkumar.website/api?format=json').then(
        async (res) => await res.json(),
      ),
  )

  useEffect(() => {
    if (data) {
      setNews(data)
    }
  }, [data])

  return {
    news,
    isLoading,
    isError,
  }
}
