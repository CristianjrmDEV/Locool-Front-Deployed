import React from 'react'
import { Box, Button } from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { mainTheme } from '../../themes/mainTheme'
import { useNavigate } from 'react-router-dom'

const SignupButtonComponent = () => {
        const goTo = useNavigate()
        const handleClick = () => {
          goTo('/signup')
        }
  return (
    <Button
      onClick={handleClick}
      color="inherit"
      href={'/signup'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          backgroundColor: mainTheme.palette.primary.main,
          color: mainTheme.palette.red.main,
        },
      }}
    >
      <PersonAddIcon sx={{ fontSize: '30px' }} />
      <Box sx={{ fontSize: '0.6rem' }}>Sign up</Box>
    </Button>
  )
}

export default SignupButtonComponent