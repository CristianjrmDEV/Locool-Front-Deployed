import { Box, Card, CardContent, CardMedia, Container, Grid, Skeleton, Stack, Typography } from '@mui/material'
import React, { useEffect, useState,useContext } from 'react'
import PageTitleComponent from '../PageTitle/PageTitleComponent'
import ButtonComponent from '../Button/ButtonComponent'
import { mainTheme } from '../../themes/mainTheme'
import { getMyFarms } from '../../services/userService'
import { FarmPageContext } from '../../contexts/farm'
import { deleteFarm } from '../../services/userService'

const FarmListComponent = (props) => {

    const {setEditFarmData} = useContext(FarmPageContext)

    const[myFarms,setMyFarms] = useState([])

    const [isLoading, setIsLoading] = useState(true);

    const obtainMyFarms = async() => {
      const userName = localStorage.getItem('locoolUsername')
      const result = await getMyFarms(userName)
      console.log(result)
      setMyFarms(result)
      setIsLoading(false)
    }
  
    const onAddNewFarmClick = () =>{
        props.handleComponent('FarmAddCardComponent')
    }

    const onAddNewProductClick = (data) =>{
        setEditFarmData({
            id: data.farmId,
            name: data.name,
        })
        props.handleComponent('FarmAddProductCardComponent')
    }

    const onEditFarmClick = (data) => {
        setEditFarmData({
            id: data.farmId,
            name: data.name,
            address: data.address,
            collection_point: data.collection_point,
            collection_schedule: data.collection_schedule
        })
        props.handleComponent('FarmEditCardComponent')
    }

    const onSeeProductsClick = (data) =>{
        setEditFarmData({
            id: data.farmId,
            name: data.name,
            address: data.address,
            collection_point: data.collection_point,
            collection_schedule: data.collection_schedule
        })
        props.handleComponent('FarmSeeProductsCardComponent')
    }
    

    const onDeleteFarmClick = async(farmId) => {
        console.log(localStorage.username)
        const response = await deleteFarm(localStorage.username,farmId)
        console.log(response)
        return response
    }
  
    useEffect(()=>{ 
      obtainMyFarms() 
    },[])


    return (
        <Box>
            <Box sx={{ backgroundColor:mainTheme.palette.black.main, padding: '10px 0',width:'100%' ,display:'flex', justifyContent: 'flex-end', height: 'fit-content'}}>
                <PageTitleComponent title={'Farm'} />
                <ButtonComponent text='Add new farm' bgColour='green' textColour='white' width='300px' fx={onAddNewFarmClick}/>
            </Box>
            {
                isLoading ? (
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "500px", widht:'300px' }}>
                        <Stack spacing={1} sx={{ width: 300, height: 300}}>
                            {/* For variant="text", adjust the height via font-size */}
                            <Skeleton variant="text" sx={{ fontSize: '5rem' }} />
                            {/* For other variants, adjust the size with `width` and `height` */}
                            <Skeleton variant="circular" width={60} height={60} />
                            <Skeleton variant="rectangular" width={210} height={100} />
                            <Skeleton variant="rounded" width={210} height={100} />
                        </Stack>
                    </Box>
                ) : myFarms.length > 0 ? (
                    <Grid container spacing={1} justifyContent="center" alignItems="center" sx={{p:'10px'}}>
            {
                myFarms.map((farm,idx)=>{
                return(
                    <Grid item xs={12} sm={6} md={4} key={idx}>
                    <Card sx={{backgroundColor: mainTheme.palette.primary.main, p:'10px 10px 0px 10px'}}>
                        <CardMedia component='img' sx={{borderRadius:'10px'}} image={`https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} title='FarmImage' />
                        <CardContent sx={{p:'0px'}}>
                        <Box sx={{paddingY:'10px', paddingLeft:'10px'}}>
                            <Typography color={mainTheme.palette.red.main} >Name: {farm.name}</Typography>
                            <Typography color={mainTheme.palette.white.main}>Adress: {farm.address}</Typography>
                            <Typography color={mainTheme.palette.white.main}>Id: {farm.id}</Typography>
                        </Box>
                        <Box sx={{backgroundColor:mainTheme.palette.green.main, paddingLeft:'15px', paddingY:'10px',marginBottom:'5px'}}>
                            <Typography fontWeight="bold">Collection point: {farm.collection_point}</Typography>
                            <Typography>Schedule: {farm.collection_schedule}</Typography>
                        </Box>
                        <Grid container  sx={{backgroundColor:mainTheme.palette.secondary.main, height:'140px'}}>
                            <Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <ButtonComponent text='Add new product' bgColour='green' textColour='white' width='145px' minWidth='145px' fx={()=>onAddNewProductClick({
                                    farmId: farm.id,name: farm.name
                                })}/>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <ButtonComponent text='See products' bgColour='green' textColour='white' width='145px' minWidth='145px' fx={() => onSeeProductsClick({
                                    farmId: farm.id,name: farm.name, address: farm.address, collection_point: farm.collection_point, collection_schedule: farm.collection_schedule
                                })}/>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <ButtonComponent text='Edit farm' bgColour='primary' textColour='white' width='145px' minWidth='145px' fx={() => onEditFarmClick({
                                    farmId: farm.id,name: farm.name, address: farm.address, collection_point: farm.collection_point, collection_schedule: farm.collection_schedule
                                })}/>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <ButtonComponent text='Delete farm' bgColour='red' textColour='white' width='145px' minWidth='145px' fx={() => onDeleteFarmClick(farm.id)}/>
                            </Grid>
                        </Grid>
                        </CardContent>
                    </Card>
                    </Grid>
                )
                })
            }
            </Grid>
                ) : (
                    <Container sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height:'400px'}}>
                        <Typography align='center'>You dont have any farms added</Typography>
                        <ButtonComponent text='Add new farm' bgColour='green' textColour='white' width='300px' fx={onAddNewFarmClick}/>
                    </Container>
                )
            }
        </Box>
    )
}

export default FarmListComponent