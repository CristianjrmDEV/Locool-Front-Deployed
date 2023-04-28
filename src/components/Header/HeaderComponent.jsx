import React from 'react'
import './HeaderComponent.css'
import {
  AppBar,
  Button,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Grid,
  Link,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LogoWhite from '../LogoWhite/LogoWhite'
import LogoutButtonComponent from '../LogoutButton/LogoutButtonComponent'
import MylocoolButtonComponent from '../mylocoolButton/MylocoolButtonComponent'

const HeaderComponent = ({ menu, login, signup, cart, logout, mylocool }) => {
  const displayCartComponent = () =>
    cart ? (
      <Button
        color="inherit"
        href={'/signup'}
      >
        Cart
      </Button>
    ) : (
      false
    )
  const displaySignUpComponent = () =>
    signup ? (
      <Button
        color="inherit"
        href={'/signup'}
      >
        Sign up
      </Button>
    ) : (
      false
    )

  const displayLogInComponent = () =>
    login ? (
      <Button
        color="inherit"
        href={'/login'}
      >
        Login
      </Button>
    ) : (
      false
    )

  const displayLogOutComponent = () =>
    logout ? <LogoutButtonComponent /> : false

  const displayMylocoolComponent = () =>
    mylocool ? <MylocoolButtonComponent /> : false

  const displayMenuComponent = () =>
    menu ? (
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
    ) : (
      false
    )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={6}
            >
              {' '}
              {displayMenuComponent()}
              <LogoWhite />
            </Grid>
            <Grid
              item
              xs={6}
            >
              {displayLogInComponent()}
              {displaySignUpComponent()}
              {displayMylocoolComponent()}
              {displayCartComponent()}
              {displayLogOutComponent()}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default HeaderComponent
