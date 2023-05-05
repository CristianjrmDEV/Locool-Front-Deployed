import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import { mainTheme } from '../../themes/mainTheme'
import DrawerTitleComponent from '../DrawerTitle/DrawerTitleComponent'
import DrawerButtonListComponent from '../DrawerButtonList/DrawerButtonListComponent'
import DrawerGreeting from '../DrawerGreeting/DrawerGreeting'
import DrawerCartButton from '../DrawerCartButton/DrawerCartButton'
import CartComponent from '../Cart/CartComponent'

const DrawerComponent = ({
  clickable,
  openOption,
  width,
  title,
  titleTopPadding,
  buttonList,
  greeting,
  cartBtn,
  cartComponent,
  align,
}) => {
  const drawerWidth = width ? width : 240

  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box sx={{ backgroundColor: mainTheme.palette.secondary.main }}>
      <List sx={{ p: 0 }}>
        <DrawerGreeting greeting={greeting} />
        <DrawerTitleComponent
          title={title}
          titleTopPadding={titleTopPadding}
          align={align}
        />
        <DrawerButtonListComponent
          list={buttonList}
          handleDrawer={handleDrawerToggle}
          align={align}
        />
      </List>
      <CartComponent cartComponent={cartComponent} />
      <DrawerCartButton cartBtn={cartBtn} />
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
