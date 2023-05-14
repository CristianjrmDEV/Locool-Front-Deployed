import React from 'react'
import './ContactPage.css'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import { Box, Link } from '@mui/material'
import PageHeadingComponent from '../../components/PageHeading/PageHeading'

const ContactPage = () => {
  return (
    <Box
      width={'80%'}
      sx={{ m: '10px auto 50px auto' }}
    >
      <PageTitleComponent title={'Contact'} />
      <PageHeadingComponent text="Javier García Gámez" />
      <Link
        href="https://www.linkedin.com/in/javierggamez/"
        target="_blank"
      >
        www.linkedin.com/in/javierggamez
      </Link>
      <PageHeadingComponent text="Víctor Carmona Ojeda" />
      <Link
        href="https://www.linkedin.com/in/victor-carmona-ojeda-4a85051ba/"
        target="_blank"
      >
        www.linkedin.com/in/victor-carmona-ojeda-4a85051ba
      </Link>
      <PageHeadingComponent text="Cristian Javier Rivero Martín" />
      <Link
        href="https://www.linkedin.com/in/cristian-javier-rivero-mart%C3%ADn/"
        target="_blank"
      >
        www.linkedin.com/in/cristian-javier-rivero-martín/
      </Link>
    </Box>
  )
}

export default ContactPage