import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import ButtonComponent from '../../components/Button/ButtonComponent'
import { mainTheme } from '../../themes/mainTheme'
import { FarmsContext } from '../../contexts/farm'
import { useContext, useEffect, useState } from 'react'
import { getAllProductsByFarmId } from '../../services/farmService'
import ProductListComponent from '../../components/ProductList/ProductListComponent'
import ProductCardComponent from '../../components/ProductCard/ProductCardComponent'
import { capitalise } from '../../services/toolkit'
import { getFullMame } from '../../services/toolkit'

const FarmDetailsPage = () => {
  const { getOne } = useContext(FarmsContext)
  //   console.log(getOne)
  const [products, setProducts] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  const getAllProducts = async () => {
    const result = await getAllProductsByFarmId(getOne.id)
    console.log(result)
    setProducts(result)
    setIsLoading(false)
    console.log(getOne)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  const FarmDetail = ({ field, value }) => {
    console.log(value)
    return (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              width: '300px',
            }}
          >
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
  }

  const validValue =  (value) => (value !== null || value !== '') ? true : false

  const seeOnMap = () => {}

  return (
    <Box sx={{ width: '100%' }}>
      <Card sx={{ height: '400px', position: 'relative' }}>
        <CardMedia
          component="img"
          image="https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="MyFarmImage"
          sx={{ height: '100%' }}
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
          {getOne.name}
        </Typography>
      </Card>
      <Box
        sx={{
          backgroundColor: mainTheme.palette.green.main,
          p: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <FarmDetail
          field="Collection point: "
          value={getOne.collection_point}
        />
        <FarmDetail
          field="Opening times: "
          value={getOne.collection_schedule}
        />
        <FarmDetail
          field="Contact: "
          value={getOne.user.email}
        />
        <FarmDetail
          field="Owner: "
          value={getFullMame(getOne.user.first_name, getOne.user.last_name)}
        />
        <FarmDetail
          field="Municipality: "
          value={getOne.municipality.name}
        />
        <FarmDetail
          field="Address: "
          value={getOne.address}
        />
        <ButtonComponent
          text="See on map"
          bgColour={'secondary'}
          width="300px"
          fx={seeOnMap}
        />
      </Box>

      {isLoading ? (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '500px',
            widht: '300px',
          }}
        >
          <Stack
            spacing={1}
            sx={{ width: 300, height: 300 }}
          >
            {/* For variant="text", adjust the height via font-size */}
            <Skeleton
              variant="text"
              sx={{ fontSize: '5rem' }}
            />
            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton
              variant="circular"
              width={60}
              height={60}
            />
            <Skeleton
              variant="rectangular"
              width={210}
              height={100}
            />
            <Skeleton
              variant="rounded"
              width={210}
              height={100}
            />
          </Stack>
        </Box>
      ) : products.length > 0 ? (
        products.map((product, idx) => (
          <Box
            key={idx}
            sx={{
              m: 5,
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <ProductCardComponent
              product={product.farm_product}
              showFarmName={false}
              showDescription={product.farm_product.description}
            />
          </Box>
        ))
      ) : (
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '400px',
          }}
        >
          <Typography align="center">
            There is no products in this farm
          </Typography>
        </Container>
      )}
    </Box>
  )
}

export default FarmDetailsPage
