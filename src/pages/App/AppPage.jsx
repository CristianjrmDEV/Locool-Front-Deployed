import React from 'react'
import './AppPage.css'
import LogoutButtonComponent from '../../components/LogoutButton/LogoutButtonComponent'
import { getUserProfile } from '../../services/userService'

const AppPage = () => {

  const getProfile = async() => {
    const data = await getUserProfile()
    console.log("Datos", data)
  }

  console.log(getProfile())
  return (
    <div>
      <h1>AppPage</h1>
      <LogoutButtonComponent />
    </div>
  )
}

export default AppPage
