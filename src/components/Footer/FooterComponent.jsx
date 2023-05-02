import React from 'react'
import './FooterComponent.css'
import { Box, Button, Divider, Typography } from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'

const FooterComponent = () => {
  return (
    <Box
      sx={{
        backgroundColor: mainTheme.palette.secondary.main,
        color: mainTheme.palette.primary.main,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Button
          sx={{
            textTransform: 'capitalize',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: mainTheme.palette.secondary.main,
              color: mainTheme.palette.green.main,
            },
          }}
          href="/"
        >
          Locool
        </Button>
        <Button
          sx={{
            textTransform: 'capitalize',
            py: 0,
            px: 1,
            '&:hover': {
              backgroundColor: mainTheme.palette.secondary.main,
              color: mainTheme.palette.green.main,
            },
          }}
        >
          About us
        </Button>
        <Button
          sx={{
            textTransform: 'capitalize',
            py: 0,
            px: 1,
            '&:hover': {
              backgroundColor: mainTheme.palette.secondary.main,
              color: mainTheme.palette.green.main,
            },
          }}
        >
          Proyect
        </Button>
        <Button
          sx={{
            textTransform: 'capitalize',
            px: 1,
            py: 0,
            '&:hover': {
              backgroundColor: mainTheme.palette.secondary.main,
              color: mainTheme.palette.green.main,
            },
          }}
        >
          Contact
        </Button>
      </Box>
      <Divider sx={{ m: 1 }} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Button
          sx={{
            textTransform: 'capitalize',
            fontSize: '.8rem',
            '&:hover': {
              color: mainTheme.palette.red.main,
              backgroundColor: mainTheme.palette.secondary.main,
            },
          }}
        >
          Terms & Conditions
        </Button>
        <Button
          sx={{
            textTransform: 'capitalize',
            fontSize: '.8rem',
            '&:hover': {
              color: mainTheme.palette.red.main,
              backgroundColor: mainTheme.palette.secondary.main,
            },
          }}
        >
          Privacy notice
        </Button>
        <Button
          sx={{
            textTransform: 'capitalize',
            fontSize: '.8rem',
            '&:hover': {
              color: mainTheme.palette.red.main,
              backgroundColor: mainTheme.palette.secondary.main,
            },
          }}
        >
          Cookies policy
        </Button>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography sx={{ fontSize: '.7rem', padding: '10px' }}>
          &copy; 2023 locool. All rights reserved
        </Typography>
      </Box>
    </Box>
  )
}

export default FooterComponent
