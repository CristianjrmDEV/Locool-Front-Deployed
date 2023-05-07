import React from 'react'
import './ButtonComponent.css'

import { mainTheme } from '../../themes/mainTheme'
import { darken } from '@mui/system'
import { Button, Typography } from '@mui/material'

const ButtonComponent = ({ text, textColour, bgColour, padding, margin,width,minWidth, fx }) => {
  return (
    <Button
      fullWidth={true}
      variant="contained"
      color={`${bgColour}`}
      onClick={fx}
      sx={{
        textTransform: 'none',
        margin: margin,
        padding: padding,
        width: width,
        minWidth:minWidth,
        color: mainTheme.palette[textColour].main,
        '&:hover': {
          backgroundColor: darken(mainTheme.palette[bgColour].main, 0.1),
        },
      }}
    > {text}</Button>
  )
}

export default ButtonComponent
