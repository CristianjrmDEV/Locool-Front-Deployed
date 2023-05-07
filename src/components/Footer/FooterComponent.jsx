import React from 'react'
import './FooterComponent.css'
import { Box } from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'
import DrawerComponent from '../Drawer/DrawerComponent'
import FooterLInkComponent from '../FooterLink/FooterLInkComponent'
import CopyrightComponent from '../Copyright/CopyrightComponent'
import MylocoolButtonComponent from '../mylocoolButton/MylocoolButtonComponent'

const drawerWidth = 100 % ''

const FooterComponent = () => {

  return (
    <Box sx={{ backgroundColor: mainTheme.palette.secondary.main }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <DrawerComponent
          clickable={
            <MylocoolButtonComponent bgColor='secondary' />
          }
          title={'Locool'}
          openOption={'bottom'}
          buttonList={['About', 'Mission', 'Contact']}
          width="100%"
          align="center"
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <FooterLInkComponent
          text="Privacy notice"
          link="/app/legal-privacy"
        />
        <FooterLInkComponent
          text="Terms & Conditions"
          link="/app/legal-terms"
        />
        <FooterLInkComponent
          text="Cookies Policy"
          link="/app/legal-cookies"
        />
      </Box>
      <CopyrightComponent />
    </Box>
  )
}

export default FooterComponent
