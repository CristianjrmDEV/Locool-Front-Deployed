import React from 'react'
import './HomePage.css'
import { useTheme } from '@emotion/react'
import { Button } from '@mui/material'

const Home = () => {
  const theme = useTheme()
  return (
    <div>
      Home page
      <Button
        size="small"
        color="error"
        variant="contained"
      >
        Register
      </Button>
    </div>
  )
}

export default Home