import * as React from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { mainTheme } from '../../themes/mainTheme'
import DrawerButtonComponent from '../DrawerButton/DrawerButtonComponent'
import { getUserProfile } from '../../services/userService'
import { useState, useEffect } from 'react'
import { ListItemButton, ListItemText, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import DrawerTitleComponent from '../DrawerTitle/DrawerTitleComponent'
import DrawerButtonListComponent from '../DrawerButtonList/DrawerButtonListComponent'
import DrawerGreeting from '../DrawerGreeting/DrawerGreeting'
import DrawerCartButton from '../DrawerCartButton/DrawerCartButton'

const DrawerComponent = ({
  clickable,
  openOption,
  title,
  buttonList,
  greeting,
  seeCartBtn,
}) => {
  const drawerWidth = 240

  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box sx={{ backgroundColor: mainTheme.palette.secondary.main }}>
      <List sx={{ p: 0 }}>
        <DrawerGreeting greeting={greeting} />

        <DrawerTitleComponent title={title} />

        <DrawerButtonListComponent
          list={buttonList}
          handleDrawer={handleDrawerToggle}
        />
      </List>
      <DrawerCartButton seeCartBtn={seeCartBtn} />
    </Box>
  )

  const container = window.document.body

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{ mr: 2 }}
        onClick={handleDrawerToggle}
      >
        {clickable}
      </Box>

      <CssBaseline />

      <Box>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor={openOption}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
      </Box>
    </Box>
  )
}

export default DrawerComponent
