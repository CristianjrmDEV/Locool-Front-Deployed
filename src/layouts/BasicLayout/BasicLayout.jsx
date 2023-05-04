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
      minHeight={'100vh'}
    >
      <HeaderComponent
        login={true}
        signup={true}
      />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Outlet />
      </Box>
      <FooterComponent />
    </Box>
  )
}

export default BasicLayout
