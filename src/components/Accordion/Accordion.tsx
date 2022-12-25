import * as React from 'react'
import { styled } from '@mui/material/styles'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'

export const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  backgroundColor: '#262626',
  boxShadow: 'none',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

export const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  backgroundColor: '#262626',
  color: '#F4F4F4',
  padding: '0',
  margin: '0',
  border: 'none',
  '& .MuiAccordionSummary-expandIconWrapper': {
    marginRight: '16px',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
  },
  '& .MuiTypography-root': {
    marginLeft: '16px',
  },
}))

export const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  backgroundColor: '#262626',
  color: '#F4F4F4',
  margin: '0',
  border: 'none',
}))
