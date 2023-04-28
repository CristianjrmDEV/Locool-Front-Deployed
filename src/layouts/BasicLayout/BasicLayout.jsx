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


const BasicLayout = () => {
  return (
    <Box
      display="grid"
      gridTemplateRows="repeat(3, 1fr)"
      gap={2}
    >
      <Box>
        <HeaderComponent
          menu={false}
          login={true}
          signup={true}
          cart={false}
          logout={false}
          mylocool={false}
        />
      </Box>
      <Box>
        <div className="outlet-wrapper">
          <Outlet />
        </div>
      </Box>

      <Box>Footer</Box>
    </Box>
  )
}

export default BasicLayout
