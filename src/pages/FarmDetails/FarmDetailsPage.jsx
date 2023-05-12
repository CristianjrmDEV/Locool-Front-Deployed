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
import {
  getAllProductsByFarmId,
  lookForFarms,
} from '../../services/farmService'
import ProductListComponent from '../../components/ProductList/ProductListComponent'
import ProductCardComponent from '../../components/ProductCard/ProductCardComponent'
import { capitalise } from '../../services/toolkit'
import { getFullMame } from '../../services/toolkit'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import LoadingComponent from '../../components/Loading/LoadingComponent'
import NoDataComponent from '../../components/NoData/NoDataComponent'

const FarmInfosPage = () => {
  const GLOBAL_Farm = useContext(FarmsContext)
  const { getOne } = useContext(FarmsContext)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const getAllProducts = async () => {
    const result = await getAllProductsByFarmId(getOne.id)
    console.log(result)
    setProducts(result)
    setLoading(false)
    console.log(getOne)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  const FarmInfo = ({ field, value }) => {
    FarmInfo.propTypes = {
      field: PropTypes.string,
      value: PropTypes.string,
    }
    console.log('value from FarmInfo: ', value)

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

  const goTo = useNavigate()

  const seeOnMap = async () => {
    const result = await lookForFarms(getOne.name)
    GLOBAL_Farm.set(result)
    goTo('/app')
  }

  const displayProducts = () => {
    if (products.length > 0) {
      return (
        <Box
          display="grid"
          gridTemplateColumns="auto auto auto"
          sx={{
            gridTemplateColumns: {
              sm: 'auto',
              md: 'auto auto',
              lg: 'auto auto auto',
              xl: 'auto auto auto',
            },
          }}
        >
          {products.map((product, idx) => {
            return (
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
            )
          })}
        </Box>
      )
    } else {
      return <NoDataComponent text="There are not products available" />
    }
  }

  const PhotoTitle = () => (
    <Box>
      <Card
        sx={{
          height: '350px',
        }}
      >
        <CardMedia
          component="img"
          image={getOne.image_url}
          alt="MyFarmImage"
          sx={{ height: '100%', borderRadius: '0px' }}
        />
        <Typography
          // variant="h3"
          // component="div"
          sx={{
            // position: 'absolute',
            // bottom: 10,
            // left: 10,
            // padding: '10px',
            color: mainTheme.palette.primary.main,
          }}
        >
          {getOne.name}
        </Typography>
      </Card>
    </Box>
  )

  const Details = () => (
    <Box
      sx={{
        backgroundColor: mainTheme.palette.primary.main,
        color: mainTheme.palette.white.main,
      }}
    >

      <Box sx={{ justifyContent: 'flex-start', p: 2 }}>
        <FarmInfo
          field="Collection: "
          value={getOne.collection_point}
        />
        <FarmInfo
          field="Open: "
          value={getOne.collection_schedule}
        />
        <FarmInfo
          field="Contact: "
          value={getOne.user.email}
        />
        <FarmInfo
          field="Owner: "
          value={getFullMame(getOne.user.first_name, getOne.user.last_name)}
        />
        <FarmInfo
          field="Municipality: "
          value={getOne.municipality.name}
        />{' '}
        <FarmInfo
          field="Address: "
          value={getOne.address}
        />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <ButtonComponent
            text="See on map"
            bgColour={'green'}
            fx={seeOnMap}
            textSize={1.2}
          />
        </Box>
      </Box>{' '}
    </Box>
  )

  return (
    <Box sx={{ width: '100%' }}>
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
      {loading ? <LoadingComponent spinnerSize={200} /> : displayProducts()}
    </Box>
  )
}

export default FarmInfosPage
