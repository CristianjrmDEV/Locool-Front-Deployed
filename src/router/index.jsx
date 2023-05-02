import { createBrowserRouter, redirect } from 'react-router-dom'
import BasicLayout from '../layouts/BasicLayout/BasicLayout'
import MainLayout from '../layouts/MainLayout/MainLayout'
import LoginPage from '../pages/Login/LoginPage'
import SignupPage from '../pages/Signup/SignupPage'
import AppPage from '../pages/App/AppPage'
import FarmPage from '../pages/Farm/FarmPage'
import BasicPage from './../pages/Basic/BasicPage'
import CartPage from '../pages/Cart/CartPage'
import OrderPage from '../pages/Order/OrderPage'
import ProfilePage from '../pages/Profile/ProfilePage'
import RefundPage from '../pages/Refund/RefundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      {
        path: '/',
        element: <BasicPage />,
        loader: () => {
          if (localStorage.getItem('token')) {
            return redirect('/app')
          } else {
            return null
          }
        },
      },
      {
        path: '/login',
        element: <LoginPage />,
        loader: () => {
          if (localStorage.getItem('token')) {
            return redirect('/app')
          } else {
            return null
          }
        },
      },
      {
        path: '/signup',
        element: <SignupPage />,
        loader: () => {
          if (localStorage.getItem('token')) {
            return redirect('/app')
          } else {
            return null
          }
        },
      },
    ],
  },
  {
    path: '/app',
    element: <MainLayout />,
    loader: () => {
      if (!localStorage.getItem('token')) {
        return redirect('/')
      } else {
        return null
      }
    },
    children: [
      {
        path: '/app',
        element: <AppPage />,
      },
      {
        path: '/app/farms',
        element: <FarmPage />,
      },
      {
        path: '/app/cart',
        element: <CartPage />,
      },
      {
        path: '/app/orders',
        element: <OrderPage />,
      },
      {
        path: '/app/profile',
        element: <ProfilePage />,
      },
      {
        path: '/app/refunds',
        element: <RefundPage />,
      },
    ],
  },
])

export default router
