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
  textSize
}) => {
  
  ButtonComponent.propTypes = {
    text: PropTypes.string.isRequired,
    textColour: PropTypes.string,
    bgColour: PropTypes.string,
    padding: PropTypes.string,
    margin: PropTypes.string,
    width: PropTypes.string,
    minWidth: PropTypes.string,
    fx: PropTypes.func,
    textSize: PropTypes.number,
  }

  const displaySize = () => textSize ? `${textSize}rem` : '0.8rem'

  return (
    <Button
      fullWidth={true}
      variant="contained"
      color={bgColour ? `${bgColour}` : 'green'}
      onClick={fx}
      sx={{
        fontSize: displaySize ,
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
