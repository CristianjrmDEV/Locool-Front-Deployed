import React from 'react'
import './ButtonComponent.css'

import { mainTheme } from '../../themes/mainTheme'
import { Box, darken } from '@mui/system'
import { Button, Typography } from '@mui/material'
import PropTypes from 'prop-types'

const ButtonComponent = ({
  text,
  textColour,
  bgColour,
  padding,
  margin,
  width,
  minWidth,
  fx,
}) => {
  ButtonComponent.propTypes = {
    text: PropTypes.string.isRequired,
    textColour: PropTypes.string.isRequired,
    bgColour: PropTypes.string.isRequired,
    padding: PropTypes.number.isRequired,
    margin: PropTypes.number.isRequired,
    width: PropTypes.string.isRequired,
    minWidth: PropTypes.string.isRequired,
    fx: PropTypes.func.isRequired,
  }

  return (
    <Button
      fullWidth={true}
      variant="contained"
      color={bgColour ? `${bgColour}` : 'green'}
      onClick={fx}
      sx={{
        textTransform: 'none',
        margin: margin,
        padding: padding,
        width: width,
        minWidth: minWidth,
        color: textColour
          ? mainTheme.palette[textColour].main
          : mainTheme.palette.primary.main,

        '&:hover': {
          backgroundColor: bgColour
            ? darken(mainTheme.palette[bgColour].main, 0.1)
            : darken(mainTheme.palette.green.main, 0.1),
        },
      }}
    >
      {text}
    </Button>
  )
}

export default ButtonComponent
