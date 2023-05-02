import * as React from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { mainTheme } from '../../themes/mainTheme'
import DrawerButtonComponent from '../DrawerButton/DrawerButtonComponent'
import { getUserProfile } from '../../services/userService'
import { useState, useEffect } from 'react'
import { Typography } from '@mui/material'

// (async () => console.log(await getUserProfile()))()

const DrawerComponent = ({ clickable }) => {
  const drawerWidth = 240

  const [user, setUser] = useState({})

  const getUser = async () => {
    const result = await getUserProfile()
    setUser(result.user)
    // console.log(result.user)
  }

  useEffect(() => {
    getUser()
  }, [])

  const displayUsername = () =>
    user.username
      ? `Hello  ${
          user.username.slice(0, 1).toUpperCase() + user.username.slice(1)
        }`
      : ''

  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const listElements = ['Profile', 'Orders', 'Refunds', 'Farms']

  const drawer = (
    <Box sx={{ backgroundColor: mainTheme.palette.secondary.main }}>
      <List sx={{ p: 0 }}>
        <ListItem
          sx={{ backgroundColor: mainTheme.palette.primary.main, pt: 6 }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
            }}
          >
            {displayUsername()}
          </Typography>
        </ListItem>
        <ListItem sx={{backgroundColor: mainTheme.palette.primary.main,}}>
          <Typography
            sx={{
              color: mainTheme.palette.white.main,
              fontSize: '1.1rem',
            }}
          >
            My locool
          </Typography>
        </ListItem>

        {listElements.map((text, index) => (
          <DrawerButtonComponent
            key={index}
            text={text}
            route={listElements[index].toLowerCase()}
          />
        ))}
      </List>
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
