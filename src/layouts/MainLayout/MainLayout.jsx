import './MainLayout.css'
import { Outlet } from 'react-router-dom'
import HeaderComponent from './../../components/Header/HeaderComponent'
import FooterComponent from './../../components/Footer/FooterComponent'

const MainLayout = () => {
  return (
    <div>
      <HeaderComponent
        menu={true}
        login={false}
        signup={false}
        cart={true}
        logout={true}
        mylocool={true}
      />
      <div className="outlet-wrapper">
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  )
}

export default MainLayout