import React from 'react'
import './ButtonWithIconComponent.css'
import { Box, Button } from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'
import PropTypes from 'prop-types'

const ButtonWithIconComponent = ({ icon, text, fx, buttonBg }) => {
  ButtonWithIconComponent.propTypes = {
    icon: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    fx: PropTypes.func.isRequired,
    buttonBg: PropTypes.string.isRequired,
  }

  return (
    <Button
      onClick={fx}
      color="inherit"
      sx={{
        pl:2,
        pr:5,
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          backgroundColor: mainTheme.palette[buttonBg].main,
          color: mainTheme.palette.white.main,
        },
      }}
    >
      {icon}
      <Box sx={{ fontSize: '0.7rem' }}>{text}</Box>
    </Button>
  )
}

export default ButtonWithIconComponent
