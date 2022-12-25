import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'
import { data, TaskType } from './data/database'
import { QueryClient, QueryClientProvider } from 'react-query'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const client = new QueryClient()
export const AppContext = React.createContext<TaskType[]>([])

root.render(
  <React.StrictMode>
    <AppContext.Provider value={data}>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </AppContext.Provider>
  </React.StrictMode>,
)
