import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, CircularProgress, Container, Grid, Skeleton, Stack, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import PageTitleComponent from '../PageTitle/PageTitleComponent'
import ButtonComponent from '../Button/ButtonComponent'
import { mainTheme } from '../../themes/mainTheme'
import { getAllProductsByFarmId } from '../../services/farmService'
import { FarmPageContext } from '../../contexts/farm'
import { deleteProductOfFarm } from '../../services/userService'
import { PopupFarmComponent } from '../PopupFarm/PopupFarmComponent'

const FarmSeeProductsCardComponent = (props) => {

    const { editFarmData,setEditProductData } = useContext(FarmPageContext)
    console.log(editFarmData)
    const [myProducts, setMyProducts] = useState([])

    const [isLoading, setIsLoading] = useState(true);

    const [disable,setDisabled] = useState(false)

    const [msgFinal,setMsgFinal] = useState(false)

    const getAllProducts = async () => {
        const result = await getAllProductsByFarmId(editFarmData.id)
        setMyProducts(result)
        setIsLoading(false)
    }

    const onAddNewProductClick = () => {
        props.handleComponent('FarmAddProductCardComponent')
    }

    const onEditClick = (data) => {
        setEditProductData(
            {
                farmId: data.farmId,
                farm_name: data.farm_name,
                productid: data.productid,
                stock: data.stock,
                price: data.price,
                image_url: data.image_url,
                unit_of_sale: data.measure,
                description: data.description
            }
        )
        props.handleComponent('FarmEditProductCardComponent')
    }

    const onRemoveClick = async(data) => {
        setDisabled(true)
        const productID = data.productId

        const result = await deleteProductOfFarm(localStorage.username,data.farmId,data.productId)

        setMyProducts(myProducts.filter((product) => product.id !== productID))

        setMsgFinal(true)
        setDisabled(false)
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <Box>
            <Card sx={{ height: '400px', position: 'relative' }}>
                <CardMedia
                    component="img"
                    image={editFarmData.image_url}
                    alt="MyFarmImage"
                    sx={{ objectFit: "fill", height: "100%" }}
                />
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
                    {editFarmData.farm_name}
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
            <Box sx={{ backgroundColor:mainTheme.palette.black.main, padding: '10px 0',width:'100%' ,display:'flex', justifyContent: 'flex-end'}}>
                <ButtonComponent text='Add new product' width='25%' bgColour='green' textColour='white' fx={onAddNewProductClick}/>
            </Box>
            <PageTitleComponent title='My products' />
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
                ) : myProducts.length > 0 ? (
                    <Grid container spacing={1} justifyContent="center" alignItems="center" sx={{ p: '10px' }}  >
                {
                    myProducts.map((product, idx) => {
                        console.log('despacito')
                        console.log(product)
                        console.log('despacito')
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                                <Card color='secondary' sx={{ marginY: '10px', p: '10px', backgroundColor: mainTheme.palette.secondary.main }}>
                                    <CardMedia component='img' sx={{ borderRadius: '10px', width: '100%', height: '300px' }} image={product.farm_product.image_url} title='FarmProduct' />     
                                    <CardContent>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography>
                                                {product.name}
                                            </Typography>
                                            <Typography>
                                                {product.farm_product.price}€/kg
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex' }}>
                                            <ButtonComponent isDisabled={disable} text='Edit' bgColour='green' textColour='white' width='50%' margin='0px 5px 0px 0px' fx={()=>onEditClick({farmId: product.farm_product.farmId, farm_name: editFarmData.farm_name  ,productid: product.farm_product.productId, stock: product.farm_product.stock,price: product.farm_product.price,image_url: product.farm_product.image_url , measure: product.farm_product.unit_of_sale , description: product.farm_product.description })} />
                                            <ButtonComponent isDisabled={disable} text='Remove' bgColour='red' textColour='white' width='50%' margin='0px 5px 0px 5px' fx={()=>onRemoveClick({productId: product.id, farmId: product.farm_product.farmId})} />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
                ) : (
                    <Container sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height:'400px'}}>
                        <Typography align='center'>You dont have any products added to your farm</Typography>
                        <ButtonComponent text='Add new product' bgColour='green' textColour='white' width='300px' fx={onAddNewProductClick} />
                    </Container>
                )
            }
            {
                msgFinal === true ? <PopupFarmComponent text='Deleted product from your farm'/> : false
            }
                
        </Box>

    )
}

export default FarmSeeProductsCardComponent