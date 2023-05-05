import React from 'react'
import './FooterLInkComponent.css'
import { Box, darken } from '@mui/system'
import { Link } from 'react-router-dom'
import { mainTheme } from '../../themes/mainTheme'
import { Button, Typography } from '@mui/material'

const FooterLInkComponent = ({ text, link, size }) => {
  return (
    <Link to={link ? `${link}` : '#'}>
      <Button
        sx={{
          textTransform: 'capitalize',
          fontSize: size ? size : '.8rem',
          '&:hover': {
            color: darken(mainTheme.palette.green.main, 0.1),
            backgroundColor: mainTheme.palette.secondary.main,
          },
        }}
      >
        {text}
      </Button>
    </Link>
  )
}

export default FooterLInkComponent
