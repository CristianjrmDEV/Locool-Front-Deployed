import React from 'react'
import './LoginPage.css'
import LoginComponent from '../../components/Login/LoginComponent'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'

const LoginPage = () => {
  return (
    <div>
      <>
        <PageTitleComponent title={'Login'} />
      </>
      <LoginComponent />
    </div>
  )
}

export default LoginPage
