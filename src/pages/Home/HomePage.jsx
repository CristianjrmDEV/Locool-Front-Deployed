import './HomePage.css'
import { Button } from '@mui/material'
import getFarms from '../../services/farmService'
import { useState, useEffect } from 'react'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'

const Home = () => {

  const [farms, setFarms] = useState([])

  async function farmList() {
    const data = await getFarms()
    setFarms(data)
  }

  useEffect(() => {
    farmList()
  }, [])

  return (
    <>
      <PageTitleComponent title={'Home'} />
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
    </>
  )
}

export default Home
