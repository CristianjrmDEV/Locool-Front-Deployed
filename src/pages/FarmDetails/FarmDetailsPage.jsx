import { Box, Card, CardContent, CardMedia, Container, Grid, Skeleton, Stack, Typography } from '@mui/material';
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent';
import ButtonComponent from '../../components/Button/ButtonComponent';
import { mainTheme } from '../../themes/mainTheme';
import { FarmsContext } from '../../contexts/farm';
import { useContext, useState } from 'react';
import { getAllProductsByFarmId } from '../../services/farmService';

const FarmDetailsPage = () => {
    // const { getOne } = useContext(FarmsContext)
    // console.log(getOne)
    // const [products, setProducts] = useState([])

    // const [isLoading, setIsLoading] = useState(true);

    // const getAllProducts = async () => {
    //     const result = await getAllProductsByFarmId(getOne.id)
    //     console.log(result)
    //     setProducts(result)
    //     setIsLoading(false)
    // }

    // const onAddNewProductClick = () => {
    //     // props.handleComponent('FarmAddProductCardComponent')
    //     //Añadir redireccion a añadir producto con los datos
    // }

    // const onEditClick = (data) => {
    //     setEditProductData(
    //         {
    //             farmId: data.farmId,
    //             productid: data.productid,
    //             name: data.name,
    //             stock: data.stock,
    //             price: data.price,
    //             img: data.img
    //         }
    //     )
    //     props.handleComponent('FarmEditProductCardComponent')
    // }

    // const onRemoveClick = async(data) => {
    //     const result = await deleteProductOfFarm(localStorage.username,data.farmId,data.productId)
    //     console.log(result)
    // }

    // useEffect(() => {
    //     getAllProducts()
    // }, [])

    // return (
    //     <Box>
    //         <Card sx={{ height: '400px', position: 'relative' }}>
    //             <CardMedia
    //                 component="img"
    //                 image="https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //                 alt="MyFarmImage"
    //                 sx={{ objectFit: "fill", height: "100%" }}
    //             />
    //             <Typography
    //                 variant="h3"
    //                 component="div"
    //                 sx={{
    //                     position: 'absolute',
    //                     bottom: 10,
    //                     left: 10,
    //                     padding: '10px',
    //                     color: mainTheme.palette.white.main,
    //                 }}
    //             >
    //                 {editFarmData.name}
    //             </Typography>
    //         </Card>
    //         <Box sx={{ backgroundColor: mainTheme.palette.green.main }}>
    //             <Typography fontWeight="bold" sx={{ textAlign: 'center' }}>
    //                 Collection point: {editFarmData.collection_point}
    //             </Typography>
    //             <Typography sx={{ textAlign: 'center' }}>
    //                 {editFarmData.collection_schedule}
    //             </Typography>
    //         </Box>
    //         <Box sx={{ backgroundColor: mainTheme.palette.black.main, padding: '10px 0', width: '100%', display: 'flex', justifyContent: 'flex-end', height: 'fit-content' }}>
    //             <PageTitleComponent title={'SeeProducts'} />
    //             <ButtonComponent text='Add new product' bgColour='green' textColour='white' width='300px' fx={onAddNewProductClick} />
    //         </Box>
    //         {
    //             isLoading ? (
    //                 <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "500px", widht:'300px' }}>
    //                     <Stack spacing={1} sx={{ width: 300, height: 300}}>
    //                         {/* For variant="text", adjust the height via font-size */}
    //                         <Skeleton variant="text" sx={{ fontSize: '5rem' }} />
    //                         {/* For other variants, adjust the size with `width` and `height` */}
    //                         <Skeleton variant="circular" width={60} height={60} />
    //                         <Skeleton variant="rectangular" width={210} height={100} />
    //                         <Skeleton variant="rounded" width={210} height={100} />
    //                     </Stack>
    //                 </Box>
    //             ) : myProducts.length > 0 ? (
    //                 <Grid container spacing={1} justifyContent="center" alignItems="center" sx={{ p: '10px' }}  >
    //             {
    //                 myProducts.map((product, idx) => {
    //                     console.log(product)
    //                     return (
    //                         <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
    //                             <Card color='secondary' sx={{ marginY: '10px', p: '10px', backgroundColor: mainTheme.palette.secondary.main }}>
    //                                 <CardMedia component='img' sx={{ borderRadius: '10px', width: '100%', height: '300px' }} image={product.farm_product.image_url} title='FarmProduct' />     
    //                                 <CardContent>
    //                                     <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
    //                                         <Typography>
    //                                             {product.name}
    //                                         </Typography>
    //                                         <Typography>
    //                                             {product.farm_product.price}€/kg
    //                                         </Typography>
    //                                     </Box>
    //                                     <Box sx={{ display: 'flex' }}>
    //                                         <ButtonComponent text='Edit' bgColour='green' textColour='white' width='50%' margin='0px 5px 0px 0px' fx={()=>onEditClick({farmId: product.farm_product.farmId,productid: product.farm_product.productId,name: product.name, stock: product.farm_product.stock,price: product.farm_product.price,img: product.farm_product.image_url})} />
    //                                         <ButtonComponent text='Remove' bgColour='red' textColour='white' width='50%' margin='0px 5px 0px 5px' fx={()=>onRemoveClick({productId: product.id, farmId: product.farm_product.farmId})} />
    //                                     </Box>
    //                                 </CardContent>
    //                             </Card>
    //                         </Grid>
    //                     )
    //                 })
    //             }
    //         </Grid>
    //             ) : (
    //                 <Container sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height:'400px'}}>
    //                     <Typography align='center'>You dont have any products added to your farm</Typography>
    //                     <ButtonComponent text='Add new product' bgColour='green' textColour='white' width='300px' fx={onAddNewProductClick} />
    //                 </Container>
    //             )
    //         }
                
    //     </Box>

    // )
}

export default FarmDetailsPage