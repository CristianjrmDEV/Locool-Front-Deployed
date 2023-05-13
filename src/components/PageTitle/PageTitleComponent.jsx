import React from 'react'
import './PageTitleComponent.css'
import { Box, Typography } from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'

const PageTitleComponent = ({ title }) => {
  return (
    <Box
      sx={{
        width: '100%',
        // backgroundColor: mainTheme.palette.primary.main,
        // p: 3,
      }}
    >
      <Typography
        variant="h3"
        align="left"
        // color={mainTheme.palette.white.main}
        sx={{ p: '30px 0' }}
      >
        {title}
      </Typography>
    </Box>
  )
}

export default PageTitleComponent
