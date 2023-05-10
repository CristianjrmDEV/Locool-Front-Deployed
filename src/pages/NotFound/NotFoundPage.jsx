import React from 'react'
import './NotFoundPage.css'
import { Box, Typography } from '@mui/material'

const NotFoundPage = () => {
  return (
    <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Box>
        <Typography variant="h3" sx={{textAlign:'center'}}>
          The resource you are trying to reach does not exist!
        </Typography>
      </Box>
    </Box>
  )
}

export default NotFoundPage
