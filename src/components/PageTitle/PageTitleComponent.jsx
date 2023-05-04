import React from 'react'
import './PageTitleComponent.css'
import { Box, Typography } from '@mui/material'

const PageTitleComponent = ({title}) => {
  return (
    <Box><Typography variant='h3' align='left' >{title}</Typography></Box>
  )
}

export default PageTitleComponent