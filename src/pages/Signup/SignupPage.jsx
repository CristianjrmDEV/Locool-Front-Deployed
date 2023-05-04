import React from 'react'
import './SignupPage.css'
import SignUpComponent from '../../components/Signup/SignupComponent'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'

const SignupPage = () => {
  return (
    <>
      <PageTitleComponent title={'Sign up'} />
      <SignUpComponent />
    </>
  )
}

export default SignupPage