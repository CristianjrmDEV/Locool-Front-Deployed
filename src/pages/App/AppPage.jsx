import React from 'react'
import './AppPage.css'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import MapComponent from '../../components/Map/MapComponent'
import { Box } from '@mui/material'
import { PopupComponent } from '../../components/Popup/PopupComponent'

const AppPage = () => {

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <PopupComponent />
      <MapComponent />
    </Box>
  )
}

export default AppPage
