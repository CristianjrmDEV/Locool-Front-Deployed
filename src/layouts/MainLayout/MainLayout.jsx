import './MainLayout.css'
import { Outlet } from 'react-router-dom'
import HeaderComponent from './../../components/Header/HeaderComponent'
import FooterComponent from './../../components/Footer/FooterComponent'
import { Box } from '@mui/material'

const MainLayout = () => {
  return (
    <Box
      className="layout"
      display="grid"
      gridTemplateRows="auto 1fr auto"
      gap={2}
      minHeight={'100vh'}
    >
      <HeaderComponent
        menu={true}
        login={false}
        signup={false}
        cart={true}
        logout={true}
        mylocool={true}
      />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Outlet />
      </Box>
      <FooterComponent />
    </Box>
  )
}

export default MainLayout
