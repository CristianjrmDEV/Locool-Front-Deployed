import React from 'react'
import './LegalPrivacyPage.css'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import { Box, Typography } from '@mui/material'
import PageHeadingComponent from '../../components/PageHeading/PageHeading'
import { useNavigate } from 'react-router-dom'
import ButtonComponent from '../../components/Button/ButtonComponent'

const LegalPrivacyPage = () => {
  const goTo = useNavigate()
  const handleClick = () => goTo('/app/legal')

  return (
    <Box>
      <Box
        width={'80%'}
        sx={{ m: '10px auto 50px auto' }}
      >
        <PageTitleComponent title={'Privacy policy'} />
        Privacy policy This website does collect personal data from users
        without their consent, nor give it to third parties. This website does
        not use cookies at all, collect data from users nor register IP address
        from accessing the site. This website contains links to external
        websites with private policies that are unrelated to this website. You
        can decide whether you accept them or not when you access those
        websites. In general, if you browse on the Internet, you can accept or
        reject third party cookies from your browser settings.

        <ButtonComponent text='go back' fx={handleClick} margin='50px 0 0 0'/>

      </Box>
    </Box>
  )
}

export default LegalPrivacyPage