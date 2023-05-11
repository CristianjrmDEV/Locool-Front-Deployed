import React from 'react'
import './BasicPage.css'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import BasicBodyComponent from '../../components/BasicPageBody/BasicPageBodyComponent'
import DemoCarousel from '../../components/DemoCarousel/DemoCarouselComponent'
import { Box } from '@mui/material'

const BasicPage = () => {
  return (
    <Box>
      <Box sx={{overflow: 'hidden', maxHeight: 'calc(100vh - 65px)'}}>
        <DemoCarousel />
      </Box>
      <Box>
        <BasicBodyComponent />
      </Box>
    </Box>
  )
}

export default BasicPage