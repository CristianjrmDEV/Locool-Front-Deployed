import React from 'react'
import './FooterComponent.css'
import { Box, Button, Divider, Drawer, Typography } from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'
import { Link } from 'react-router-dom'
import DrawerComponent from '../Drawer/DrawerComponent'
import FooterLInkComponent from '../FooterLink/FooterLInkComponent'
import { Copyright } from '@mui/icons-material'
import CopyrightComponent from '../Copyright/CopyrightComponent'

const drawerWidth = 100 % ''

const FooterComponent = () => {

  return (
    <Box sx={{ backgroundColor: mainTheme.palette.secondary.main }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <DrawerComponent
          clickable={
            <FooterLInkComponent
              text="Locool"
              size="1.2rem"
            />
          }
          title={'Locool'}
          openOption={'bottom'}
          buttonList={['About', 'Mission', 'Contact']}
          width="100%"
          align='center'
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <FooterLInkComponent
          text="Terms & Conditions"
          link="/app/legal-terms"
        />
        <FooterLInkComponent
          text="Privacy notice"
          link="/app/legal-privacy"
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
