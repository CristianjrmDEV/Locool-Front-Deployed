import React from 'react'
import './AppPage.css'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import MapComponent from '../../components/Map/MapComponent'
import { Box } from '@mui/material'
import { PopupComponent } from '../../components/Popup/PopupComponent'
import { mainTheme } from '../../themes/mainTheme'

const AppPage = () => {
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Box
        sx={{
          backgroundColor: mainTheme.palette.green.main,
          display: 'flex',
          justifyContent: 'flex-end',
          pr:2
        }}
      >
        <PopupComponent
          greetingMessage="Hi"
          openBtn={true}
          greeting={false}
        />
      </Box>
      <MapComponent />
    </Box>
  )
}

export default AppPage
