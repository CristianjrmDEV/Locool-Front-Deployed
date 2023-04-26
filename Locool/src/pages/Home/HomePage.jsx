import React from 'react'
import './HomePage.css'
import { Button } from '@mui/material'

const Home = () => {
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