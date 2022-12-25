import { createTheme } from '@mui/material'

export const theme = createTheme()

theme.typography.fontFamily = 'Actor, sans-serif'

theme.typography.h1 = {
  fontSize: '36px',
  fontWeight: '400',
}

theme.typography.h2 = {
  fontFamily: 'sans-serif',
  fontSize: '24px',
  fontWeight: '600',
}
