import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout/MainLayout'
import HomePage from '../pages/Home/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{ path: '/', element: <HomePage /> }],
  },
])

export default router
