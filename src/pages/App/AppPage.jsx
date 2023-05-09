import React from 'react'
import './AppPage.css'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import MapComponent from '../../components/Map/MapComponent'
import { Box } from '@mui/material'

const AppPage = () => {

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      {/* <PageTitleComponent title={'App page'} /> */}
      <MapComponent />
    </Box>
  )
}

export default AppPage
