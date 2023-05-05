import React from 'react'
import './ButtonComponent.css'

import { mainTheme } from '../../themes/mainTheme'
import { darken } from '@mui/system'
import { Button, Typography } from '@mui/material'

const ButtonComponent = ({ text, textColour, bgColour, padding, margin, fx }) => {
  return (
    <Button
      fullWidth={true}
      variant="contained"
      color={`${bgColour}`}
      onClick={fx}
      sx={{
        margin: margin,
        padding: padding,
        '&:hover': {
          backgroundColor: darken(mainTheme.palette[bgColour].main, 0.1),
        },
      }}
    >
      <Typography
        color={mainTheme.palette[textColour].main}
        sx={
          {
            // fontColor:
            //   color: textColor ? textColor : 'inherit',
          }
        }
      >
        {text}
      </Typography>
    </Button>
  )
}

export default ButtonComponent
