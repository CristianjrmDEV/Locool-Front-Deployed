import { createTheme } from '@mui/material'

const mainTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#424142', // dark grey
    },
    secondary: {
      main: '#DAD9D9', // light grey
    },
    green: {
      main: '#95CA59', // green from logo
    },
    red: {
      main: '#D95656', // red from logo
    },
    white: {
      main: '#fff',
    },
    black: {
      main: '#424142',
    },
  },
  typography: {
    fontFamily: [
      'Quicksand',
      'Roboto'
    ].join(','),
  },
})

export { mainTheme }
 