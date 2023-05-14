import React from 'react'
import './LegalCookiesPage.css'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import { Box } from '@mui/material'
import PageHeadingComponent from '../../components/PageHeading/PageHeading'
import ButtonComponent from '../../components/Button/ButtonComponent'
import { useNavigate } from 'react-router-dom'

const LegalCookiesPage = () => {
    const goTo = useNavigate()
    const handleClick = () => goTo('/app/legal')
  return (
    <Box>
      <Box
        width={'80%'}
        sx={{ m: '10px auto 50px auto' }}
      >
        <PageTitleComponent title={'Cookies policy'} />
        <PageHeadingComponent text="This website does not use cookies, collect nor give personal data from users without their consent." />
        However, this website contains links to external websites with private
        policies that are unrelated to this website. You can decide whether you
        accept them or not when you access those websites.
        <ButtonComponent
          text="go back"
          fx={handleClick}
          margin="50px 0 0 0"
        />
      </Box>
    </Box>
  )
}

export default LegalCookiesPage
