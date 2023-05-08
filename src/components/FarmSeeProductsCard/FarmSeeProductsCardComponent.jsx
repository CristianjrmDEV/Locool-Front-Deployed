import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import PageTitleComponent from '../PageTitle/PageTitleComponent'
import ButtonComponent from '../Button/ButtonComponent'
import { mainTheme } from '../../themes/mainTheme'
import { getAllProductsByFarmId } from '../../services/farmService'
import { FarmsContext } from '../../contexts/farm'
import { deleteProductOfFarm } from '../../services/userService'
import UploadWidgetComponent from '../UploadWidget/UploadWidgetComponent'

const FarmSeeProductsCardComponent = (props) => {

    const { editFarmData,setEditProductData } = useContext(FarmsContext)

    const [myProducts, setMyProducts] = useState([])

    const getAllProducts = async () => {
        console.log(editFarmData)
        const result = await getAllProductsByFarmId(editFarmData.id)
        console.log(result)
        setMyProducts(result)
    }

    const onAddNewProductClick = () => {
        props.handleComponent('FarmAddProductCardComponent')
    }

    const onEditClick = (data) => {
        setEditProductData(
            {
            name: data.name,
            stock: data.stock,
            price: data.price
        }
        )
        props.handleComponent('FarmEditProductCardComponent')
    }

    const onRemoveClick = async(data) => {
        const result = await deleteProductOfFarm(localStorage.username,data.farmId,data.productId)
        console.log(result)
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <Box>
            <Card sx={{ height: '400px', position: 'relative' }}>
                <CardMedia
                    component="img"
                    image="https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="MyFarmImage"
                    sx={{ objectFit: "fill", height: "100%" }}
                />
                <UploadWidgetComponent/>
                <Typography
                    variant="h3"
                    component="div"
                    sx={{
                        position: 'absolute',
                        bottom: 10,
                        left: 10,
                        padding: '10px',
                        color: mainTheme.palette.white.main,
                    }}
                >
                    {editFarmData.name}
                </Typography>
            </Card>
            <Box sx={{ backgroundColor: mainTheme.palette.green.main }}>
                <Typography fontWeight="bold" sx={{ textAlign: 'center' }}>
                    Collection point: {editFarmData.collection_point}
                </Typography>
                <Typography sx={{ textAlign: 'center' }}>
                    {editFarmData.collection_schedule}
                </Typography>
            </Box>
            <Box sx={{ backgroundColor: mainTheme.palette.black.main, padding: '10px 0', width: '100%', display: 'flex', justifyContent: 'flex-end', height: 'fit-content' }}>
                <PageTitleComponent title={'SeeProducts'} />
                <ButtonComponent text='Add new product' bgColour='green' textColour='white' width='300px' fx={onAddNewProductClick} />
            </Box>
            <Grid container spacing={1} sx={{ p: '10px' }} >
                {
                    myProducts.map((product, idx) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                                <Card color='secondary' sx={{ marginY: '10px', p: '10px', backgroundColor: mainTheme.palette.secondary.main }}>
                                    <CardMedia component='img' sx={{ borderRadius: '10px', width: '100%', maxHeight: '100%' }} image={`https://s1.1zoom.me/b4851/409/Carrots_Closeup_Wood_planks_527961_1920x1080.jpg`} title='FarmProduct' />
                                    <CardContent>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography>
                                                Name: {product.name}
                                            </Typography>
                                            <Typography>
                                                {product.farm_product.price}€/kg
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex' }}>
                                            <ButtonComponent text='Edit' bgColour='green' textColour='white' width='50%' margin='0px 5px 0px 0px' fx={()=>onEditClick({name: product.name, stock: product.farm_product.stock,price: product.farm_product.price})} />
                                            <ButtonComponent text='Remove' bgColour='red' textColour='white' width='50%' margin='0px 5px 0px 5px' fx={()=>onRemoveClick({productId: product.id, farmId: product.farm_product.farmId})} />
                                        </Box>
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

export default FarmSeeProductsCardComponent