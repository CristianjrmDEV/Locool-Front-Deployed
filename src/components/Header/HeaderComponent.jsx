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
import CartButtonComponent from '../CartButton/CartButtonComponent'
import SignupButtonComponent from '../SignupButton/SignupButtonComponent'
import LoginButtonComponent from '../LoginButton/LoginButtonComponent'
import DrawerComponent from '../Drawer/DrawerComponent'

const HeaderComponent = ({ menu, login, signup, cart, logout, mylocool }) => {
  const displayCartComponent = () => (cart ? <CartButtonComponent /> : false)

  const displaySignUpComponent = () =>
    signup ? <SignupButtonComponent /> : false

  const displayLogInComponent = () => (login ? <LoginButtonComponent /> : false)

  const displayLogOutComponent = () =>
    logout ? <LogoutButtonComponent /> : false

  const displayMylocoolComponent = () =>
    mylocool ? (
      <DrawerComponent clickable={<MylocoolButtonComponent />} />
    ) : (
      false
    )

  const displayMenuComponent = () =>
    menu ? (
      <DrawerComponent
        clickable={
          <IconButton
            color="inherit"
            size="large"
            edge="start"
            aria-label="menu"
            sx={{m:0, p:0}}
          >
            <MenuIcon />
          </IconButton>
        }
      />
    ) : (
      false
    )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              {displayMenuComponent()}
            </Box>
            <LogoWhite />
          </Box>
          <Box
            sx={{
              display: 'flex',
            }}
          >
            {displayLogInComponent()}
            {displaySignUpComponent()}
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {displayMylocoolComponent()}
            </Box>
            {displayCartComponent()}
            {displayLogOutComponent()}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default HeaderComponent
