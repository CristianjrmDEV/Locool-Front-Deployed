import { RouterProvider } from 'react-router-dom'
import router from './router'
import { ThemeProvider } from '@emotion/react'
import {mainTheme} from './themes/mainTheme'
import '@fontsource/dosis'
import '@fontsource/quicksand'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={mainTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  )
}

export default App
