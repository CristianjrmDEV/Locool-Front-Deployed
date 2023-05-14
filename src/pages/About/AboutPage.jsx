import React from 'react'
import './AboutPage.css'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import { Box } from '@mui/material'
import PageHeadingComponent from '../../components/PageHeading/PageHeading'

const AboutPage = () => {
  return (
    <Box
      width={'80%'}
      sx={{ m: '10px auto 50px auto' }}
    >
      <PageTitleComponent title={'About us'} />
      We are a young group of junior web developers that teamed up for a
      bootcamp final project. Our social and environmental concerns drived us
      towards this interesting idea: Locool.
      <PageHeadingComponent text="Team" />
      Javier Garcia Gamez, Víctor Carmona Ojeda y Cristian Javier Rivero Martín
    </Box>
  )
}

export default AboutPage
