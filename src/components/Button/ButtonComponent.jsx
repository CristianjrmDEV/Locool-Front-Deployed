import React from 'react'
import './ButtonComponent.css'

import { mainTheme } from '../../themes/mainTheme'
import { Box, darken } from '@mui/system'
import { Button, Typography } from '@mui/material'

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
  return (
    // <Box sx={{ m: margin }}>
      <Button
        fullWidth={true}
        variant="contained"
        color={`${bgColour}`}
        onClick={fx}
        sx={{
          margin: margin,
          padding: padding,
          width: width,
          minWidth: minWidth,
          color: mainTheme.palette[textColour].main,
          '&:hover': {
            backgroundColor: darken(mainTheme.palette[bgColour].main, 0.1),
          },
          textTransform: 'none',
        }}
      >
        {text}
      </Button>
    // </Box>
  )
}

export default ButtonComponent
