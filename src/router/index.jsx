import { createBrowserRouter, redirect } from 'react-router-dom'
import BasicLayout from '../layouts/BasicLayout/BasicLayout'
import MainLayout from '../layouts/MainLayout/MainLayout'
import LoginPage from '../pages/Login/LoginPage'
import SignupPage from '../pages/Signup/SignupPage'
import AppPage from '../pages/App/AppPage'
import FarmPage from '../pages/Farm/FarmPage'
import BasicPage from './../pages/Basic/BasicPage'
import CartPage from '../pages/Cart/CartPage'
import ProfilePage from '../pages/Profile/ProfilePage'
import RefundPage from '../pages/Refund/RefundPage'
import AboutPage from '../pages/About/AboutPage'
import MissionPage from '../pages/Mission/MissionPage'
import ContactPage from '../pages/Contact/ContactPage'
import LegalTermsPage from '../pages/LegalTerms/LegalTermsPage'
import LegalPrivacyPage from '../pages/LegalPrivacy/LegalPrivacyPage'
import LegalCookiesPage from '../pages/LegalCookies/LegalCookiesPage'
import PaymentSuccessComponent from '../components/PaymentSuccess/PaymentSuccessComponent'
import PaymentFailedComponent from '../components/PaymentFailed/PaymentFailedComponent'
import PaymentSelectionComponent from '../components/PaymentSelection/PaymentSelectionComponent'
import SearchPage from '../pages/Search/SearchPage'
import PurchasePage from '../pages/Purchase/PurchasePage'
import NotFoundPage from '../pages/NotFound/NotFoundPage'
import FarmDetailsPage from '../pages/FarmDetails/FarmDetailsPage'



const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      {
        path: '/',
        element: <BasicPage />,
        loader: () => {
          if (localStorage.getItem('locoolToken')) {
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
          if (localStorage.getItem('locoolToken')) {
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
          if (localStorage.getItem('locoolToken')) {
            return redirect('/app')
          } else {
            return null
          }
        },
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: '/app',
    element: <MainLayout />,
    loader: () => {
      if (!localStorage.getItem('locoolToken')) {
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
        path: '/app/farms/details',
        element: <FarmDetailsPage />
      },
      {
        path: '/app/cart',
        element: <CartPage smallCart={true}/>,
      },
      {
        path: '/app/success',
        element: <PaymentSuccessComponent />,
      },
      {
        path: '/app/fail',
        element: <PaymentFailedComponent />,
      },
      {
        path: '/app/payment-method',
        element: <PaymentSelectionComponent />,
      },
      {
        path: '/app/purchases',
        element: <PurchasePage />,
      },
      {
        path: '/app/profile',
        element: <ProfilePage />,
      },
      {
        path: '/app/refunds',
        element: <RefundPage />,
      },
      {
        path: '/app/about',
        element: <AboutPage />,
      },
      {
        path: '/app/mission',
        element: <MissionPage />,
      },
      {
        path: '/app/contact',
        element: <ContactPage />,
      },
      {
        path: '/app/legal-terms',
        element: <LegalTermsPage />,
      },
      {
        path: '/app/legal-privacy',
        element: <LegalPrivacyPage />,
      },
      {
        path: '/app/legal-cookies',
        element: <LegalCookiesPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])

export default router
