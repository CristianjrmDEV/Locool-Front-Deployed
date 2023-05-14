import React from 'react'
import './MissionPage.css'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import { Box } from '@mui/material'
import PageHeadingComponent from '../../components/PageHeading/PageHeading'

const MissionPage = () => {
  return (
    <Box
      width={'80%'}
      sx={{ m: '10px auto 50px auto' }}
    >
      <PageTitleComponent title={'Mission'} />
      As we are driven and passionate about finding solutions to real problems,
      we created Locool.
      <PageHeadingComponent text="Locool" />
      Locool is a made-up name that stands for cool + location. The reason
      behind this project is to promote local commerce by making possible interaction between
      producers and buyers.
    </Box>
  )
}

export default MissionPage
