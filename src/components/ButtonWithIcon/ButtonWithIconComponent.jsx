import React from 'react'
import './ButtonWithIconComponent.css'
import { Box, Button } from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'
import PropTypes from 'prop-types'

const ButtonWithIconComponent = ({icon, text, fx, buttonBg}) => {
  ButtonWithIconComponent.propTypes = {
    icon: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    fx: PropTypes.func.isRequired,
    buttonBg: PropTypes.string.isRequired,
  }

  return (
    <Button
      color="inherit"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          backgroundColor: mainTheme.palette[buttonBg].main,
          color: mainTheme.palette.green.main,
        },
      }}
      onClick={fx}
    >
      {icon}
      <Box sx={{ fontSize: '0.5rem' }}>{text}</Box>
    </Button>
  )
}

export default ButtonWithIconComponent
