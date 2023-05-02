import React from 'react'
import './MylocoolButtonComponent.css'
import { Button, Link, Typography } from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'

const MylocoolButtonComponent = () => {
  return (
    <Button
      color="inherit"
      href={''}
      sx={{
        textTransform:'lowercase',
        fontSize:'1.2rem',
        '&:hover': {
          backgroundColor: mainTheme.palette.primary.main,
          color: mainTheme.palette.green.main
        },
      }}
    >my locool
    </Button>
  )
}

export default MylocoolButtonComponent


