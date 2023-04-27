import React from 'react'
import './HeaderComponent.css'
import { AppBar,Button, Box, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const HeaderComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit">Logo</Button>
          {/* <Box component='img' src='./../../assets/logo/logo-white.svg'/> */}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default HeaderComponent