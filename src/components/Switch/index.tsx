import React from 'react'
import { styled, Switch, SwitchProps } from '@mui/material'

export const SwitchComponent = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="12" width="15" viewBox="0 0 15 12"><path fill="${encodeURIComponent(
          '#A9A9A9',
        )}" d="M14.3938 1.1937L6.47953 11.0892L0.262512 5.90778L1.43553 4.50016L6.2156 8.48293L12.9641 0.0500031L14.3938 1.1937Z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#10C200' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#10C200',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 14 14"><path fill="${encodeURIComponent(
        '#A9A9A9',
      )}" d="M11.8976 13.1218L6.61086 7.82669L1.32411 13.1218L0.143738 11.9414L5.4388 6.65462L0.143738 1.36787L1.32411 0.1875L6.61086 5.48256L11.8976 0.195813L13.0697 1.36787L7.78293 6.65462L13.0697 11.9414L11.8976 13.1218Z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#366EFF' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}))
