import React from 'react'
import { Header } from '../../components/Header'
import { Tasks } from '../../components/Tasks'
import { useLocalStorage } from '../../utils'
import { Link } from '@mui/material'
import { UseNewsData } from '../../api'
import css from './styles.module.css'

export const Main: React.FC = (): JSX.Element => {
  const { news } = UseNewsData()
  const [visibleNews, setVisibleNews] = useLocalStorage('visibleNews', true)

  const changeVisibleNews = (value: boolean): void => {
    setVisibleNews(value)
  }

  return (
    <>
      <div className={css.main}>
        <Header changeVisibleNews={changeVisibleNews} visibleNews={visibleNews} />
        <Tasks />
      </div>
      {visibleNews && news && (
        <footer className={css.footer}>
          <div className={css.marquee}>
            <Link className={css.news} href={news.url} target={'_blank'}>
              {news.description}
            </Link>
          </div>
        </footer>
      )}
    </>
  )
}
