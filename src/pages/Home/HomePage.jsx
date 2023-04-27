import React from 'react'
import './HomePage.css'
import { Button } from '@mui/material'

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae sint
        aliquam debitis exercitationem aspernatur aperiam. Asperiores, sit
        nostrum similique ex reprehenderit laboriosam eius qui perspiciatis ea
        fuga natus. Recusandae.
      </p>
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
