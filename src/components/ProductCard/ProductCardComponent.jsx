import React from 'react'
import './ProductCardComponent.css'
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Popover,
  Typography,
} from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'
import { capitalise } from '../../services/toolkit'
import PropTypes from 'prop-types'
import ButtonComponent from '../Button/ButtonComponent'
import { FarmsContext } from '../../contexts/farm'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { getFarmById } from '../../services/farmService'
import ModalComponent from '../Modal/ModalComponent'
import Modal from '@mui/material/Modal'
import PopoverComponent from '../Popover/PopoverComponent'


const ProductCardComponent = ({
  product,
  showFarmName,
  showDescription,
  seeFarmButton,
}) => {
  ProductCardComponent.propTypes = {
    product: PropTypes.object.isRequired,
    showFarmName: PropTypes.bool,
    showDescription: PropTypes.string,
    seeFarmButton: PropTypes.bool,
  }

  const { setOne } = useContext(FarmsContext)

  const goTo = useNavigate()

  
  const handleGetFarm = async () => {
    const result = await getFarmById(product.farmId)
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
    setOne(objResult)
    goTo('/app/farms/details')
  }


  const addProductToCart = () => {
    const cartMap = new Map(
      JSON.parse(
        localStorage.getItem(`cart-${localStorage.getItem('locoolUsername')}`)
      )
    )

    if (!cartMap.has(product.id)) {
      console.log("Product", product)
      cartMap.set(product.farmProductId, {
        img: product.img,
        id: product.farmProductId,
        name: product.name,
        farmName: product.farmName,
        price: product.price,
        quantity: 1,
      })
    } else {
      cartMap.get(product.farmProductId)['quantity']++
    }
    localStorage.setItem(
      `cart-${localStorage.getItem('locoolUsername')}`,
      JSON.stringify([...cartMap])
    )

  }

  const displayFarmName = () => {
    return (
      showFarmName && (
        <>
          <Typography
            variant="span"
            sx={{ fontWeight: 'bold' }}
          >
            Farm:
          </Typography>
          <Typography variant="span"> {product.farmName}</Typography>
        </>
      )
    )
  }

  const displayDescription = () => {
    return (
      showDescription && (
        <>
          <Typography
            variant="span"
            sx={{ fontWeight: 'bold' }}
          >
            Description:
          </Typography>
          <Typography variant="span"> {product.description}</Typography>
        </>
      )
    )
  }

  const displaySeeFarmButton = () => {
    return (
      seeFarmButton && (
        <ButtonComponent
          text="See farm"
          fx={handleGetFarm}
          bgColour={'primary'}
          textColour={'white'}
        />
      )
    )
  }

  ///popover

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handlePopoverClick = (event) => {
    setAnchorEl(event.currentTarget)
    addProductToCart()
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  //

  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: mainTheme.palette.secondary.main,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={product.img}
          alt=""
        />
        <CardContent>
          <Box>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
            >
              {capitalise(product.name)}
            </Typography>
          </Box>
          <Box sx={{ pb: 0.5, fontSize: '1rem' }}>
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold' }}
            >
              Price:{' '}
            </Typography>
            <Typography variant="span">{product.price} €</Typography>
          </Box>
          <Box sx={{ pb: 0.5, fontSize: '1rem' }}>
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold' }}
            >
              Stock:
            </Typography>
            <Typography variant="span"> {product.stock}</Typography>
          </Box>
          <Box sx={{ pb: 0.5, fontSize: '1rem' }}>{displayFarmName()}</Box>
          <Box sx={{ pb: 0.5, fontSize: '1rem' }}>{displayDescription()}</Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          {displaySeeFarmButton()}

          <ButtonComponent
            text="Add to Cart"
            fx={handlePopoverClick}
            margin={'10px 0 2px 0'}
          />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <Box sx={{ p: 2 }}>
              <Typography sx={{ pb: 2, fontWeight: 'bold' }}>
                Item added to cart
              </Typography>
              <ButtonComponent
                fx={handleClose}
                text={'OK'}
              />
            </Box>
          </Popover>
        </Box>
      </CardActions>
    </Card>
  )
}

export default ProductCardComponent
