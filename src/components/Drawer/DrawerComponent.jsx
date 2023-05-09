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
import PropTypes from 'prop-types'

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
  DrawerComponent.propTypes = {
    clickable: PropTypes.object,
    openOption: PropTypes.string,
    width: PropTypes.string,
    title: PropTypes.string,
    titleTopPadding: PropTypes.number,
    buttonList: PropTypes.array,
    greeting: PropTypes.bool,
    cartBtn: PropTypes.bool,
    cartComponent: PropTypes.bool,
    align: PropTypes.string,
  }

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
        <DrawerCartButton cartBtn={cartBtn} />
        <CartComponent cartComponent={cartComponent} />
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
