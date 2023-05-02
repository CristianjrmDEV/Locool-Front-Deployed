import React from 'react'
import './LoginButtonComponent.css'
import { Box, Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import { mainTheme } from '../../themes/mainTheme'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'

const LoginButtonComponent = () => {
  return (
    <Button
      color="inherit"
      href={'/login'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          backgroundColor: mainTheme.palette.primary.main,
          color: mainTheme.palette.green.main,
        },
      }}
    >
      <VerifiedUserIcon />
      <Box sx={{ fontSize: '0.5rem' }}>Log in</Box>
    </Button>
  )
}

export default LoginButtonComponent
