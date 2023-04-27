import { createBrowserRouter, redirect } from 'react-router-dom'
import BasicLayout from '../layouts/BasicLayout/BasicLayout'
import MainLayout from '../layouts/MainLayout/MainLayout'
import LoginPage from '../pages/Login/LoginPage'
import SignupPage from '../pages/Signup/SignupPage'
import AppPage from '../pages/App/AppPage'
import FarmPage from '../pages/Farm/FarmPage'
import BasicPage from './../pages/Basic/BasicPage'

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
        ],
      },
    ],
  },

  /*
  {
    path: '/app',
    element: <LoginPage />,
    loader: () => {
      if (!localStorage.getItem('token')) {
        return redirect('/login')
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
