import React from 'react'
import './AppPage.css'
import MapComponent from '../../components/Map/MapComponent'
import { Box } from '@mui/material'

const AppPage = () => {
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <MapComponent />
    </Box>
  )
}

export default AppPage
