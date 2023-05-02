import * as React from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { mainTheme } from '../../themes/mainTheme'

const drawerWidth = 240

const DrawerComponent = ({clickable}) => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box sx={{ backgroundColor: mainTheme.palette.secondary.main }}>
      <List sx={{ p: 0 }}>
        <ListItem
          sx={{
            fontWeight: 'bold',
            backgroundColor: mainTheme.palette.primary.main,
            color: mainTheme.palette.white.main,
            fontSize: '1.2rem',
          }}
        >
          my locool
        </ListItem>
        <Divider />

        {['Profile', 'Orders', 'Farms'].map((text, index) => (
          <ListItem
            key={text}
            // disablePadding
          >
            <ListItemButton key={index}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container = window.document.body

  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleDrawerToggle}
      >
        {clickable}
      </IconButton>

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
