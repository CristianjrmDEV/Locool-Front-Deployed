import { Box, Card, CardContent, CardMedia, Container, Grid, Skeleton, Stack, Typography } from '@mui/material'
import React, { useEffect, useState,useContext } from 'react'
import PageTitleComponent from '../PageTitle/PageTitleComponent'
import ButtonComponent from '../Button/ButtonComponent'
import { mainTheme } from '../../themes/mainTheme'
import { getMyFarms } from '../../services/userService'
import { FarmPageContext } from '../../contexts/farm'
import { deleteFarm } from '../../services/userService'
import PropTypes from 'prop-types'
import { PopupFarmComponent } from '../PopupFarm/PopupFarmComponent'
import { getFarmById } from '../../services/farmService'

const FarmListComponent = ({handleComponent}) => {

    FarmListComponent.propTypes = {
        handleComponent: PropTypes.func
    }

    const {setEditFarmData} = useContext(FarmPageContext)

    const[myFarms,setMyFarms] = useState([])

    const [isLoading, setIsLoading] = useState(true);

    const [msgFinal,setMsgFinal] = useState(false)
    const [disable,setDisabled] = useState(false)

    const obtainMyFarms = async() => {
        const userName = localStorage.getItem('locoolUsername')
        const result = await getMyFarms(userName)
        setMyFarms(result)
        setIsLoading(false)
    }
  
    const onAddNewFarmClick = () =>{
        handleComponent('FarmAddCardComponent')
    }

    const onAddNewProductClick = (data) =>{
        setEditFarmData({
            id: data.farmId,
            name: data.name,
        })
        handleComponent('FarmAddProductCardComponent')
    }

    const onEditFarmClick = (data) => {
        setEditFarmData({
            id: data.farmId,
            name: data.name,
            address: data.address,
            image_url: data.image_url,
            collection_point: data.collection_point,
            collection_schedule: data.collection_schedule,
            latitude: data.latitude,
            longitude: data.longitude
        })
        handleComponent('FarmEditCardComponent')
    }

    const getDetailsFarmUser = async(data) => {
        const result = await getFarmById(data)
        const objResult = {
            collection_point: result.collection_point,
            collection_schedule: result.collection_schedule,
            user: {
                email: result.user.email,
                first_name: result.user.first_name,
                last_name: result.user.last_name,
            },
            municipality: { name: result.municipality.name },
            image_url: result.image_url,
            name: result.name,
            address: result.address,
            id: result.id,
        }
        return objResult
    }

    const onSeeProductsClick = async(data) =>{
        const result =  await getDetailsFarmUser(data.farmId)
        setEditFarmData({
            id: data.farmId,
            farm_name: data.farm_name,
            municipality: data.municipality,
            image_url: data.image_url,
            address: data.address,
            collection_point: data.collection_point,
            collection_schedule: data.collection_schedule,
            data: result
        })
        handleComponent('FarmSeeProductsCardComponent')
    }
    

    const onDeleteFarmClick = async(farmId) => {
        setDisabled(true)
        const response = await deleteFarm(
          localStorage.getItem('locoolUsername'),
          farmId
        )
        
        setMsgFinal(true)
        setMyFarms(myFarms.filter((farm) => farm.id !== farmId))
        setDisabled(false)
    }

  
    useEffect(()=>{ 
      obtainMyFarms() 
    },[])


    return (
        <Box sx={{borderTop: 2,
            borderColor: mainTheme.palette.secondary.main}}>
            
            <Box sx={{ backgroundColor:mainTheme.palette.black.main, padding: '10px 0',width:'100%' ,display:'flex', justifyContent: 'flex-end'}}>
                <ButtonComponent margin='0px 20px 0px 0px' text='Add new farm' width='15%' bgColour='green' textColour='white' fx={onAddNewFarmClick}/>
            </Box>
            <Box width={'90%'} sx={{ m: '10px auto 0px auto' }}>
                <PageTitleComponent title='My farms' />
            </Box>
            
            {
                isLoading ? (
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "500px", widht:'300px' }}>
                        <Stack spacing={1} sx={{ width: 300, height: 300}}>
                            {/* For variant="text", adjust the height via font-size */}
                            <Skeleton variant="text" sx={{ fontSize: '5rem' }} />
                            {/* For other variants, adjust the size with `width` and `height` */}
                            <Skeleton variant="circular" width={60} height={60} />
                            <Skeleton variant="rectangular" width={300} height={100} />
                            <Skeleton variant="rounded" width={300} height={100} />
                        </Stack>
                    </Box>
                ) : myFarms.length > 0 ? (
                    <Grid container spacing={5} justifyContent="center" alignItems="center" sx={{p:'30px'}}>
            {
                myFarms.map((farm,idx)=>{
                return(
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={idx}>
                    <Card sx={{borderRadius:'10px',backgroundColor: mainTheme.palette.primary.main, p:'10px 10px 0px 10px'}}>
                        <CardMedia component='img' style={{ height:'300px'}} sx={{borderRadius:'10px'}} image={farm.image_url} title='FarmImage' />
                        <CardContent sx={{p:'0px'}}>
                        <Box sx={{paddingY:'10px', paddingLeft:'10px'}}>
                            <Typography color={mainTheme.palette.red.main} >Name: {farm.name}</Typography>
                            <Typography color={mainTheme.palette.white.main}>Address: {farm.address}</Typography>
                        </Box>
                        <Box sx={{borderRadius:'10px',backgroundColor:mainTheme.palette.green.main, paddingLeft:'15px', paddingY:'10px',marginBottom:'5px'}}>
                            <Typography fontWeight="bold">Collection point: {farm.collection_point}</Typography>
                            <Typography>Schedule: {farm.collection_schedule}</Typography>
                        </Box>
                        <Grid container  sx={{borderRadius:'10px',backgroundColor:mainTheme.palette.secondary.main, height:'140px'}}>
                            <Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <ButtonComponent isDisabled={disable} textSize={0.8} text='Add new product' bgColour='green' textColour='white' width='145px' minWidth='145px' fx={()=>onAddNewProductClick({
                                    farmId: farm.id,name: farm.name
                                })}/>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <ButtonComponent isDisabled={disable} text='See products' bgColour='green' textColour='white' width='145px' minWidth='145px' fx={() => onSeeProductsClick({
                                    farmId: farm.id,farm_name: farm.name, address: farm.address, collection_point: farm.collection_point, collection_schedule: farm.collection_schedule,image_url: farm.image_url
                                })}/>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <ButtonComponent isDisabled={disable} text='Edit farm' bgColour='primary' textColour='white' width='145px' minWidth='145px' fx={() => onEditFarmClick({
                                    farmId: farm.id,name: farm.name, address: farm.address, muncipality: farm.municipalityId , collection_point: farm.collection_point, collection_schedule: farm.collection_schedule,
                                    latitude: farm.latitude, longitude: farm.longitude, image_url: farm.image_url
                                })}/>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <ButtonComponent isDisabled={disable} text='Delete farm' bgColour='red' textColour='white' width='145px' minWidth='145px' fx={() => onDeleteFarmClick(farm.id)}/>
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

            {
                msgFinal === true ? <PopupFarmComponent handleComponent={handleComponent} text='Your farm has been deleted'/> : false
            }
        </Box>
    )
}

export default FarmListComponent