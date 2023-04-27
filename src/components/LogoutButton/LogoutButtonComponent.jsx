import React from 'react'
import { Button } from '@mui/material'
import { logout } from '../../services/authService'
import { useNavigate } from 'react-router-dom'

const LogoutButtonComponent = () => {
  const goTo = useNavigate()
  const handleClick = () => {
    logout()
    goTo('/')
  }
  return (
    <Button
      onClick={handleClick}
      color="success"
    >
      Log out
    </Button>
  )
}

export default LogoutButtonComponent
