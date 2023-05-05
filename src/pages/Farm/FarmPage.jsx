import React, { useEffect, useState } from 'react'
import './FarmPage.css'
import { Box, Button, Typography } from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
const FarmPage = () => {

  const[myFarms,setMyFarms] = useState()

  // const getMyFarms = async() => {
  //   const result = await 
  // }

  useEffect(()=>{ 
    // getMyFarms() 
  },[])

  return (
      <Box sx={{ backgroundColor:mainTheme.palette.black.main, padding: '10px 0',width:'100%' ,display:'flex', justifyContent: 'flex-end', height: 'fit-content'}}>
        <Button variant="contained" color="green" sx={{textTransform: 'none', width:'300px' ,marginRight:'100px', color: mainTheme.palette.white.main}}>
          <Typography>Add new farm</Typography>
        </Button>
        <PageTitleComponent title={'Farm'} />
      </Box>
  )
}

export default FarmPage