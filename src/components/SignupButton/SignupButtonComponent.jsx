import React from 'react'
import { Box, Button } from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { mainTheme } from '../../themes/mainTheme'

const SignupButtonComponent = () => {
  return (
    <Button
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
      <PersonAddIcon />
      <Box sx={{ fontSize: '0.5rem' }}>Sign up</Box>
    </Button>
  )
}

export default SignupButtonComponent