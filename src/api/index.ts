import { useQuery, UseQueryResult } from 'react-query'
import { KEY_NEWS_DATA } from '../assets/constants'
import { useEffect, useState } from 'react'

interface FetchDataType {
  articles: NewsItemType[]
  status: string
  totalResults: number
}

interface UseNewsDataResponse {
  news: NewsItemType | null
  isLoading: boolean
  isError: boolean
}

export interface NewsItemType {
  author: string
  content: string
  description: string
  publishedAt: string
  title: string
  source: {
    id: number | null
    name: string
  }
  url: string
}

export const UseNewsData = (): UseNewsDataResponse => {
  const [news, setNews] = useState<NewsItemType | null>(null)
  const { data, isLoading, isError }: UseQueryResult<FetchDataType> = useQuery(
    [KEY_NEWS_DATA],
    async () =>
      await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7395fe44471c48978a92d9473b78dc72',
      ).then(async (res) => await res.json()),
  )

  useEffect(() => {
    if (data) {
      const randomInt = Math.floor(Math.random() * data.articles.length)
      setNews(data.articles[randomInt])
    }
  })

  return {
    news,
    isLoading,
    isError,
  }
}
