import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, CircularProgress, Container, Grid, Skeleton, Stack, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import PageTitleComponent from '../PageTitle/PageTitleComponent'
import ButtonComponent from '../Button/ButtonComponent'
import { mainTheme } from '../../themes/mainTheme'
import { getAllProductsByFarmId, getFarmById } from '../../services/farmService'
import { FarmPageContext, FarmsContext } from '../../contexts/farm'
import { deleteProductOfFarm } from '../../services/userService'
import { PopupFarmComponent } from '../PopupFarm/PopupFarmComponent'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { lookForFarms } from '../../services/farmService'
import { getFullMame } from '../../services/toolkit'

const FarmSeeProductsCardComponent = (props) => {

    const { editFarmData, setEditProductData } = useContext(FarmPageContext)
    
    
    

    const GLOBAL_Farm = useContext(FarmsContext)
    const { getOne } = useContext(FarmsContext)

    const [myProducts, setMyProducts] = useState([])

    const [isLoading, setIsLoading] = useState(true);

    const [disable, setDisabled] = useState(false)

    const [msgFinal, setMsgFinal] = useState(false)

    const [userFarmData,setUserFarmData] = useState({})


    const goTo = useNavigate()

    const getAllProducts = async () => {
        const result = await getAllProductsByFarmId(editFarmData.id)
        setMyProducts(result)
        setIsLoading(false)
        
        
        
    }

    const seeOnMap = async () => {
        const result = await lookForFarms(editFarmData.farm_name)
        GLOBAL_Farm.set(result)
        goTo('/app')
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
                product_name: data.product_name,
                stock: data.stock,
                price: data.price,
                image_url: data.image_url,
                unit_of_sale: data.measure,
                description: data.description
            }
        )
        props.handleComponent('FarmEditProductCardComponent')
    }
    const onRemoveClick = async (data) => {
        setDisabled(true)
        const productID = data.productId

        const result = await deleteProductOfFarm(
          localStorage.getItem('locoolUsername'),
          data.farmId,
          data.productId
        )

        setMyProducts(myProducts.filter((product) => product.id !== productID))

        setMsgFinal(true)
        setDisabled(false)
    }

    

    const PhotoTitle = () => (
        <Card
            sx={{
                height: {
                    sm: 'auto',
                    md: '320px',
                    lg: '350px',
                    xl: '380px',
                },
                position: 'relative',
                borderRadius: '0px',
            }}
        >
            <CardMedia
                component="img"
                image={editFarmData.data.image_url}
                alt="MyFarmImage"
                sx={{ height: '100%' }}
            />
            <Typography
                // variant="h3"
                // component="div"
                sx={{
                    position: 'absolute',
                    bottom: 10,
                    left: 10,
                    padding: '10px',
                    color: mainTheme.palette.white.main,
                    zIndex: 1000,
                    fontWeight: 'bold',
                    fontSize: '2rem',
                    lineHeight: 1,
                    opacity: 0.8,
                }}
            >
                {editFarmData.farm_name}
            </Typography>
        </Card>
    )

    const Details = () => (
        <Box
            sx={{
                backgroundColor: mainTheme.palette.primary.main,
                color: mainTheme.palette.white.main,
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                p: 2
            }}
        >
            <Box sx={{ justifyContent: 'flex-start', p: 2 }}>
                <FarmInfo
                    field="Collection: "
                    value={editFarmData.collection_point}
                />
                <FarmInfo
                    field="Open: "
                    value={editFarmData.collection_schedule}
                />
                <FarmInfo
                    field="Contact: "
                    value={editFarmData.data.user.mail}
                />
                <FarmInfo
                    field="Owner: "
                    value={getFullMame(editFarmData.data.user.first_name, editFarmData.data.user.last_name)}
                />
                <FarmInfo
                    field="Municipality: "
                    value={editFarmData.data.municipality.name}
                />
                <FarmInfo
                    field="Address: "
                    value={editFarmData.data.address}
                />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <ButtonComponent
                    text="See on map"
                    bgColour={'green'}
                    fx={seeOnMap}
                    textSize={1}
                    width={'45%'}
                    textColour={'white'}
                />
                <ButtonComponent  text='Add new product' width='54%' bgColour='green' textColour='white' fx={onAddNewProductClick} />
            </Box>
        </Box>
    )

    const FarmInfo = ({ field, value }) => {
        FarmInfo.propTypes = {
            field: PropTypes.string,
            value: PropTypes.string,
        }

        return (
            typeof value === 'string' && (
                <Box sx={{ display: 'flex' }}>
                    <Typography
                        fontWeight="bold"
                        sx={{ textAlign: 'center' }}
                    >
                        {field}
                    </Typography>
                    &nbsp;
                    <Typography>{value}</Typography>
                </Box>
            )
        )
    }

    

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <Box sx={{borderTop: 2,
            borderColor: mainTheme.palette.secondary.main}}>
            <Box
                sx={{
                    display: {
                        xs: 'flex',
                        sm: 'grid',
                    },
                    flexDirection: {
                        xs: 'column',
                    },
                    gridTemplateColumns: {
                        sm: '40% 60%',
                        md: '50% 50%',
                        lg: '70% 30%',
                        xl: '80% 20%',
                    },
                }}
            >
                <PhotoTitle />
                <Details />
            </Box>
            <Box width={'80%'} sx={{ m: '10px auto 50px auto' }}>
                <PageTitleComponent title='My products' />
            </Box>

            {
                isLoading ? (
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "500px", widht: '300px' }}>
                        <Stack spacing={1} sx={{ width: 300, height: 300 }}>
                            {/* For variant="text", adjust the height via font-size */}
                            <Skeleton variant="text" sx={{ fontSize: '5rem' }} />
                            {/* For other variants, adjust the size with `width` and `height` */}
                            <Skeleton variant="circular" width={60} height={60} />
                            <Skeleton variant="rectangular" width={210} height={100} />
                            <Skeleton variant="rounded" width={210} height={100} />
                        </Stack>
                    </Box>
                ) : myProducts.length > 0 ? (

                    <Grid container spacing={3} justifyContent="center" alignItems="center" sx={{ p: '30px', marginY: '40px' }}  >
                        {
                            myProducts.map((product, idx) => {
                                
                                
                                
                                
                                
                                
                                return (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                                        <Card color='secondary' sx={{ marginY: '10px', p: '10px', backgroundColor: mainTheme.palette.secondary.main }}>
                                            <CardMedia component='img' sx={{ borderRadius: '10px', width: '100%', height: '300px' }} image={product.farm_product.image_url !== '' && product.farm_product.image_url !== null ? product.farm_product.image_url : product.img_url} title='FarmProduct' />
                                            <CardContent>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '30px' }}>
                                                    <Box sx={{ display: 'flex' }}>
                                                        <Typography sx={{ fontWeight: 'bold' }}>
                                                            Name:
                                                        </Typography>
                                                        <Typography sx={{ marginLeft: '10px' }}>{product.name}</Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex' }}>
                                                        <Typography sx={{ fontWeight: 'bold' }}>
                                                            Price:
                                                        </Typography>
                                                        <Typography sx={{ marginLeft: '10px' }}> {product.farm_product.price} €/kg</Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex' }}>
                                                        <Typography sx={{ fontWeight: 'bold' }}>
                                                            Stock:
                                                        </Typography>
                                                        <Typography sx={{ marginLeft: '10px' }}> {product.farm_product.price} {product.farm_product.unit_of_sale} </Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex' }}>
                                                        <Typography sx={{ fontWeight: 'bold' }}>
                                                            Description:
                                                        </Typography>
                                                        <Typography sx={{ marginLeft: '10px' }}>{product.farm_product.description}</Typography>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: 'flex' }}>
                                                    <ButtonComponent isDisabled={disable} text='Edit' bgColour='green' textColour='white' width='50%' margin='0px 5px 0px 0px' fx={() => onEditClick({ farmId: product.farm_product.farmId, farm_name: editFarmData.farm_name, productid: product.farm_product.productId, product_name: product.name, stock: product.farm_product.stock, price: product.farm_product.price, image_url: product.farm_product.image_url, measure: product.farm_product.unit_of_sale, description: product.farm_product.description })} />
                                                    <ButtonComponent isDisabled={disable} text='Remove' bgColour='red' textColour='white' width='50%' margin='0px 5px 0px 5px' fx={() => onRemoveClick({ productId: product.id, farmId: product.farm_product.farmId })} />
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                ) : (
                    <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: '400px' }}>
                        <Typography align='center'>You dont have any products added to your farm</Typography>
                        <ButtonComponent text='Add new product' bgColour='green' textColour='white' width='300px' fx={onAddNewProductClick} />
                    </Container>
                )
            }
            {
                msgFinal === true ? <PopupFarmComponent text='Deleted product from your farm' /> : false
            }

        </Box>

    )
}

export default FarmSeeProductsCardComponent