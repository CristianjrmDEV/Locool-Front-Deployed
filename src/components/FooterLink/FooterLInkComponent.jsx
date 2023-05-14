import React from 'react'
import './FooterLInkComponent.css'
import { Box, darken } from '@mui/system'
import { Link } from 'react-router-dom'
import { mainTheme } from '../../themes/mainTheme'
import { Button, Typography } from '@mui/material'
import PropTypes from 'prop-types'

const FooterLInkComponent = ({ text, link, size }) => {
  FooterLInkComponent.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string,
    size: PropTypes.string,
  }

  return (
    <Link to={link ? `${link}` : '#'}>
      <Button
        sx={{
          // width:'250px',
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
