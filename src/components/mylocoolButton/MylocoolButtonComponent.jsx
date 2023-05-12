import React from 'react'
import './MylocoolButtonComponent.css'
import { Button, Link, Typography } from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'

const MylocoolButtonComponent = ({ bgColor }) => {
  MylocoolButtonComponent.propTypes = {
    bgColor: PropTypes.string,
  }
  return (

      <Button
        color="inherit"
        sx={{
          textTransform: 'lowercase',
          fontSize: '1.2rem',
          '&:hover': {
            backgroundColor:
              mainTheme.palette[bgColor ? bgColor : 'primary'].main,
            color: mainTheme.palette.green.main,
          },
        }}
      >
        my locool
      </Button>
  )
}

export default MylocoolButtonComponent
