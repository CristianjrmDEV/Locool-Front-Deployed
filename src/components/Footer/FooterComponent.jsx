import React from 'react'
import './FooterComponent.css'
import { Box, Button, Divider, Drawer, Typography } from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'

const drawerWidth = 100 % ''

const FooterComponent = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const drawer = (
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
        {/* <Button
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
        </Button> */}
        <Button
          href="/app/about"
          sx={{
            textTransform: 'capitalize',
            py: 1,
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
          href="/app/mission"
          sx={{
            textTransform: 'capitalize',
            py: 1,
            px: 1,
            '&:hover': {
              backgroundColor: mainTheme.palette.secondary.main,
              color: mainTheme.palette.green.main,
            },
          }}
        >
          Mission
        </Button>
        <Button
          href="/app/contact"
          sx={{
            textTransform: 'capitalize',
            px: 1,
            py: 1,
            '&:hover': {
              backgroundColor: mainTheme.palette.secondary.main,
              color: mainTheme.palette.green.main,
            },
          }}
        >
          Contact
        </Button>
      </Box>
    </Box>
  )
  const container = window.document.body

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: mainTheme.palette.secondary.main,
        color: mainTheme.palette.primary.main,
      }}
    >
      <Button
        sx={{
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: mainTheme.palette.secondary.main,
            color: mainTheme.palette.green.main,
          },
        }}
        onClick={handleDrawerToggle}
      >
        Locool
      </Button>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        anchor="bottom"
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: false, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Button
          href="/app/legal-terms"
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
          href="/app/legal-privacy"
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
          href="/app/legal-cookies"
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
