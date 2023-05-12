import React from 'react'
import './LoginButtonComponent.css'
import { Box, Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import { mainTheme } from '../../themes/mainTheme'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import { useNavigate } from 'react-router-dom'

const LoginButtonComponent = () => {
      const goTo = useNavigate()
      const handleClick = () => {
        goTo('/login')
      }
  return (
    <Button
      onClick={handleClick}
      color="inherit"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          backgroundColor: mainTheme.palette.primary.main,
          color: mainTheme.palette.green.main,
        },
      }}
    >
      <VerifiedUserIcon sx={{ fontSize: '30px' }} />
      <Box sx={{ fontSize: '0.6rem' }}>Log in</Box>
    </Button>
  )
}

export default LoginButtonComponent
