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
import PropTypes from 'prop-types'
import { PopupComponent } from '../Popup/PopupComponent'
import { mainTheme } from '../../themes/mainTheme'

const HeaderComponent = ({
  menu,
  login,
  signup,
  cart,
  logout,
  mylocool,
  search,
}) => {
  HeaderComponent.propTypes = {
    menu: PropTypes.bool,
    login: PropTypes.bool,
    signup: PropTypes.bool,
    cart: PropTypes.bool,
    logout: PropTypes.bool,
    mylocool: PropTypes.bool,
    search: PropTypes.bool,
  }

  const displayCartComponent = () =>
    cart ? (
      <DrawerComponent
        clickable={<CartButtonComponent smallCart={true} />}
        openOption={'right'}
        title={'Shopping Cart'}
        titleTopPadding={5}
        cartComponent={true}
        cartBtn={true}
        greeting={false}
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
        buttonList={['Profile', 'Purchases', 'Refunds', 'Farms']}
        cartComponent={false}
        greetingMessage={'Hello'}
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
            <MenuIcon sx={{ fontSize: '30px' }} />
          </IconButton>
        }
        title={'My locool'}
        openOption={'left'}
        greeting={true}
        buttonList={['Profile', 'Purchases', 'Refunds', 'Farms']}
      />
    ) : (
      false
    )

  const displaySearchComponent = (bgColour) =>
    search ? <SearchBarComponent bgColour={bgColour} /> : false

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
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            {displaySearchComponent('primary')}
          </Box>
          <Box
            sx={{
              display: 'flex',
            }}
          >
            {displayLogInComponent()}
            {displaySignUpComponent()}
            <Box
              sx={{ display: { xs: 'none', sm: 'block' }, alignSelf: 'center' }}
            >
              {displayMylocoolComponent()}
            </Box>
            {displayCartComponent()}
            {displayLogOutComponent()}
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
        {displaySearchComponent('secondary')}
      </Box>
      {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end', backgroundColor:'none' }}>
        <PopupComponent bgColour={'red'} />
      </Box> */}
    </Box>
  )
}

export default HeaderComponent
