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
import SearchBarComponent from '../SearchBar/SearchBarComponent'

const HeaderComponent = ({
  menu,
  login,
  signup,
  cart,
  logout,
  mylocool,
  search,
}) => {

  const displayCartComponent = () =>
    cart ? (
      <DrawerComponent
        clickable={<CartButtonComponent />}
        openOption={'right'}
        title={'Shopping Cart'}
        titleTopPadding={5}
        cartComponent={true}
        cartBtn={true}
      />
    ) : (
      false
    )

  const displaySignUpComponent = () =>
    signup ? <SignupButtonComponent /> : false

  const displayLogInComponent = () => (login ? <LoginButtonComponent /> : false)

  const displayLogOutComponent = () =>
    logout ? <LogoutButtonComponent /> : false

  const displayMylocoolComponent = () =>
    mylocool ? (
      <DrawerComponent
        clickable={<MylocoolButtonComponent />}
        title={'My locool'}
        openOption={'left'}
        greeting={true}
        buttonList={['Profile', 'Orders', 'Refunds', 'Farms']}
        cartComponent={false}
        cartBtn={false}
      />
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
            sx={{ m: 0, p: 0 }}
          >
            <MenuIcon />
          </IconButton>
        }
      />
    ) : (
      false
    )

  const displaySearchComponent = () => (search ? <SearchBarComponent /> : false)

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
      {displaySearchComponent()}
    </Box>
  )
}

export default HeaderComponent
