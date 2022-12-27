import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import TextField, { TextFieldProps } from '@mui/material/TextField'

const CssTextField = styled((props: TextFieldProps) => <TextField {...props} />)({
  '& label.Mui-focused': {
    color: '#F4F4F4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#F4F4F4',
    color: '#F4F4F4',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#F4F4F4',
    },
    '&:hover fieldset': {
      borderColor: '#F4F4F4',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#F4F4F4',
    },
  },
})

export const NewTask = (props: TextFieldProps) => {
  return (
    <Box
      component='form'
      noValidate
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr 1fr' },
        gap: 2,
      }}
    >
      <CssTextField
        {...props}
        label={props.label}
        variant='standard'
        multiline
        sx={{
          '& .MuiInput-input': { color: '#F4F4F4' },
          '& .MuiFormLabel-root': { color: '#F4F4F4' },
          '& .MuiInputBase-root:before': {
            color: '#F4F4F4',
            borderBottomColor: '#F4F4F4',
          },
          '& .MuiInputBase-root:after': {
            color: '#F4F4F4',
            borderBottom: '1px solid #F4F4F4',
          },
        }}
      />
    </Box>
  )
}
