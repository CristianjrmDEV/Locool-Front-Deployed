import React from 'react'
import './FooterComponent.css'
import { Box } from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'
import DrawerComponent from '../Drawer/DrawerComponent'
import FooterLInkComponent from '../FooterLink/FooterLInkComponent'

const FooterComponent = () => {

  return (
    <Box sx={{ backgroundColor: mainTheme.palette.secondary.main }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <DrawerComponent
          clickable={
            <FooterLInkComponent
              text="Locool"
              size='1.2rem'
            />
          }
          title={'Locool'}
          openOption={'bottom'}
          buttonList={['About', 'Mission', 'Contact', 'Legal']}
          width="100%"
          align="center"
          titleTopPadding={0}
          greeting={false}
        />
      </Box>
    </Box>
  )
}

export default FooterComponent
