import './BasicLayout.css'
import { Outlet } from 'react-router-dom'
import HeaderComponent from '../../components/Header/HeaderComponent'
import {
  AppBar,
  Button,
  Grid,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import FooterComponent from '../../components/Footer/FooterComponent'

const BasicLayout = () => {
  return (
    <Box
      className="layout"
      display="grid"
      gridTemplateRows="auto 1fr auto"
      gap={2}
      minHeight={'100vh'}
    >
      <HeaderComponent
        menu={false}
        login={true}
        signup={true}
        cart={false}
        logout={false}
        mylocool={false}
      />
      <Outlet />
      <FooterComponent />
    </Box>
  )
}

export default BasicLayout
