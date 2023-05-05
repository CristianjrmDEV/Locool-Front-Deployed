import React, { useEffect, useState } from 'react'
import './FarmPage.css'
import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography, darken } from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import { getMyFarms } from '../../services/userService'

const FarmPage = () => {

  const[myFarms,setMyFarms] = useState([])

  const obtainMyFarms = async() => {
    const userName = localStorage.getItem('username')
    const result = await getMyFarms(userName)
    console.log(result)
    setMyFarms(result)
  }

  useEffect(()=>{ 
    obtainMyFarms() 
  },[])

  return (
    <Box>
      <Box sx={{ backgroundColor:mainTheme.palette.black.main, padding: '10px 0',width:'100%' ,display:'flex', justifyContent: 'flex-end', height: 'fit-content'}}>
        <PageTitleComponent title={'Farm'} />
        <Button variant="contained" color="green" sx={{textTransform: 'none', width:'300px' ,marginRight:'100px', color: mainTheme.palette.white.main}}>
          <Typography>Add new farm</Typography>
        </Button>
      </Box>
      <Grid container spacing={1} sx={{p:'10px'}}>
      {
          myFarms.map((farm,idx)=>{
            return(
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card >
                  <CardMedia component='img' image={`https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} title='FarmImage' />
                  <CardContent sx={{p:'0px'}}>
                    <Typography>Name: paquito</Typography>
                    <Typography>Adress: {farm.address}</Typography>
                    <Box sx={{backgroundColor:mainTheme.palette.green.main}}>
                      <Typography>Collection point: {farm.collection_point}</Typography>
                      <Typography>Schedule: {farm.collection_schedule}</Typography>
                    </Box>
                    <Grid container spacing={1} >
                      <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button variant='contained' color='green' sx={{textTransform: 'none' ,width:'145px', minWidth:'145px', color:mainTheme.palette.white.main, "&:hover": {backgroundColor: darken(mainTheme.palette.green.main, 0.1)}}}>Add new product</Button>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Button variant='contained' color='green' sx={{textTransform: 'none' ,width:'145px', minWidth:'145px', color:mainTheme.palette.white.main}}>See products</Button>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Button variant='contained' color='primary' sx={{textTransform: 'none' ,width:'145px', minWidth:'145px'}}>Edit farm</Button>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button variant='contained' color='red' sx={{textTransform: 'none' ,width:'145px', minWidth:'145px', color:mainTheme.palette.white.main}}>Delete farm</Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            )
          })
        }
      </Grid>
    </Box>
  )
}

export default FarmPage