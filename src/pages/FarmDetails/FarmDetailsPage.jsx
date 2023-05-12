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
    console.log(value)
    return (
      <Box
        sx={{
          display: 'flex',
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
    <Card
      sx={{
        height: '300px',
        position: 'relative',
        width: {
          xs: '40%',
          sm: '50%',
          md: '65%',
        },
      }}
    >
      <CardMedia
        component="img"
        image={getOne.image_url}
        alt="MyFarmImage"
        sx={{ height: '100%', borderRadius:'0px'}}
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
  )

  const Details = () => (
    <Box
      sx={{
        backgroundColor: mainTheme.palette.secondary.main,
        // p: 1,
        width: {
          xs: '60%',
          sm: '50%',
          md: '35%',
        },
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
      <Box sx={{ display: 'flex' }}>
        <PhotoTitle />
        <Details />
      </Box>
      {loading ? <LoadingComponent spinnerSize={200} /> : displayProducts()}
    </Box>
  )
}

export default FarmInfosPage
