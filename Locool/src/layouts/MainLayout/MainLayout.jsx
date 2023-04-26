import './MainLayout.css'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <div>Here goes the header</div>
        <div className='outlet-wrapper'>
            <Outlet />
        </div>
    </div>
  )
}

export default MainLayout