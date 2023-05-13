import React from 'react'
import './PageTitleComponent.css'
import { Box, Typography } from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'
import PropTypes from 'prop-types'

const PageTitleComponent = ({ title, titleColour }) => {
  PageTitleComponent.propTypes = {
    title: PropTypes.string.isRequired,
    titleColour: PropTypes.string,
  }

  const applyTitleColour = () =>
    titleColour
      ? mainTheme.palette[titleColour].main
      : mainTheme.palette.primary.main

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Typography
        variant="h3"
        align="left"
        color={applyTitleColour} 
        sx={{ p: '30px 0',  }}
      >
        {title}
      </Typography>
    </Box>
  )
}

export default PageTitleComponent
