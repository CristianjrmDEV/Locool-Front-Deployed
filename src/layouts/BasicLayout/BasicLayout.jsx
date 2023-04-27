import './BasicLayout.css'
import { Outlet } from 'react-router-dom'
import HeaderComponent from '../../components/Header/HeaderComponent'

const BasicLayout = () => {
  return (
    <div>
      <HeaderComponent />
      <div className="outlet-wrapper">
        <Outlet />
      </div>
    </div>
  )
}

export default BasicLayout