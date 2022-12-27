import { styled } from '@mui/material/styles'
import { Checkbox, CheckboxProps } from '@mui/material'

export const CheckboxCustom = styled((props: CheckboxProps) => <Checkbox {...props} />)(() => ({
  color: '#F4F4F4',
  padding: 0,
  '&.Mui-checked': {
    color: '#F4F4F4',
  },
  '& .MuiSvgIcon-root': { fontSize: '30px' },
}))
