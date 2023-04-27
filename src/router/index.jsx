import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout/MainLayout'
import HomePage from '../pages/Home/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{ path: '/', element: <HomePage /> }],
  },

/*
  {
    path: '/login',
    element: <LoginPage />,
    loader: () => {
      if (!localStorage.getItem('token')) {
        return redirect('/')
      } else {
        return null
      }
    },
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/home/about',
        element: <About />
      }
    ]
  }
*/

])

export default router


