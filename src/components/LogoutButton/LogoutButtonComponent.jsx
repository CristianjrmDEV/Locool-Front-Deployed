import React from 'react'
import { Box, Button } from '@mui/material'
import { logout } from '../../services/authService'
import { useNavigate } from 'react-router-dom'
import { mainTheme } from '../../themes/mainTheme'
import LogoutIcon from '@mui/icons-material/Logout'

const LogoutButtonComponent = () => {
  const goTo = useNavigate()
  const handleClick = () => {
    logout()
    goTo('/')
  }
  return (
    <Button
      color="inherit"
      onClick={handleClick}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          backgroundColor: mainTheme.palette.primary.main,
          color: mainTheme.palette.red.main,
        },
      }}
    >
      <LogoutIcon />
      <Box sx={{ fontSize: '0.5rem' }}>Log out</Box>
    </Button>
  )
}

export default LogoutButtonComponent
