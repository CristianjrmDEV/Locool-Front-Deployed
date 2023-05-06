import React from 'react'
import './MylocoolButtonComponent.css'
import { Button, Link, Typography } from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'
import PropTypes from 'prop-types'


const MylocoolButtonComponent = ({bgColor}) => {
    MylocoolButtonComponent.propTypes = {
      bgColor: PropTypes.string.isRequired
    }
  return (
    <Button
      color="inherit"
      href={''}
      sx={{
        margin: 0,
        textTransform: 'lowercase',
        fontSize: '1.2rem',
        '&:hover': {
          backgroundColor: mainTheme.palette[bgColor ? bgColor : 'primary'].main,
          color: mainTheme.palette.green.main,
        },
      }}
    >
      my locool
    </Button>
  )
}

export default MylocoolButtonComponent


