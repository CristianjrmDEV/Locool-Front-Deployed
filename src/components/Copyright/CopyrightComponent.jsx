import React from 'react'
import './CopyrightComponent.css'
import { Box, Typography } from '@mui/material'

const CopyrightComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Typography sx={{ fontSize: '.7rem', padding: '10px' }}>
        &copy; 2023 locool. All rights reserved
      </Typography>
    </Box>
  )
}

export default CopyrightComponent