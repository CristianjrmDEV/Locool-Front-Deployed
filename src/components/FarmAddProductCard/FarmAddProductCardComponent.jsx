import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, FormControl, InputLabel, MenuItem, Select, TextField, TextareaAutosize, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import PageTitleComponent from '../PageTitle/PageTitleComponent'
import ButtonComponent from '../Button/ButtonComponent'
import { addProductToFarm } from '../../services/userService'
import { FarmPageContext } from '../../contexts/farm'
import { getAllProducts } from '../../services/userService'
import UploadWidgetComponent from '../UploadWidget/UploadWidgetComponent'
import PropTypes from 'prop-types'
import defaultPepinillo from '../../assets/images/product/defaultPepinillo.jpg'
import { Image } from '@mui/icons-material'
import { mainTheme } from '../../themes/mainTheme'
import uploadImageCloudinary from '../../services/cloudinary'
import { PopupFarmComponent } from '../PopupFarm/PopupFarmComponent'
import {PopupComponent} from '../Popup/PopupComponent'

const FarmAddProductCardComponent = ({handleComponent}) => {

  FarmAddProductCardComponent.propTypes = {
    handleComponent: PropTypes.string
  }

  const { editFarmData } = useContext(FarmPageContext)

  const [productsType,setProductsType] = useState([])
  
  const [imageLoading,setImageLoading] = useState('')

  const [selectedOption, setSelectedOption] = useState('');
  const [imgSelected, setImgSelected] = useState('')
  const [productStock,setProductStock] = useState('')
  const [productPrice,setProductPrice] = useState('')
  const [productDescription,setProductDescription] = useState('')
  const [productMeasurement, setProductMeasurement] = useState('');

  const [msgFinal,setMsgFinal] = useState(true)

  const newProduct = {
    productId: selectedOption,
    image_url: imgSelected,
    stock: productStock,
    price: productPrice,
    unit_of_sale: productMeasurement,
    description: productDescription
  }

  const onSelectedOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const uploadImage = async(imageUrl) => {
    const data = new FormData();
    data.append("file", imageUrl);
    data.append("upload_preset", "presetUnsignedLocool");
    data.append("folder", "locool");
    data.append("cloud_name", "locool");

    const url = await uploadImageCloudinary(data)
    setImgSelected(url)
  };

  const onAddProductClick = async() =>{
    if(imgSelected !== ''){
      await uploadImage(imgSelected)
    }
    const result = await addProductToFarm(localStorage.username,editFarmData.id,newProduct)
    setMsgFinal(true)
  }

  const onCancelClick = () => {
    handleComponent('FarmListComponent')
  }

  const getProductsType = async() => {
    const result = await getAllProducts()
    setProductsType(result)

  }

  const handleImageLoading = (imgLoading) =>{
    setImageLoading(imgLoading)
    setImgSelected(imgLoading)
  }

  const handleImageValue = (img) => {
    setImgSelected(img)
  }

  const handleMeasureChange = (e) =>{
    setProductMeasurement(e.target.value)
  }

  const handleStockChange = (e) => {
    const stockRegex = /^\d{0,6}(\.\d{0,2})?$/
    if (stockRegex.test(e.target.value)) {
      setProductStock(e.target.value)
    }
  }

  const handlePriceChange = (e) => {
    const stockRegex = /^\d{0,6}(\.\d{0,2})?$/
    if (stockRegex.test(e.target.value)) {
      setProductPrice(e.target.value)
    }
  }

  useEffect(()=> {
    getProductsType()
  },[])

  return (
    <Box >
      <Box sx={{width:'600px', margin:'auto'}}>
        <PageTitleComponent title={'Add new product to farm'} />
      </Box>
      <Card color='secondary' sx={{width: '600px', margin: 'auto',marginY:'10px', backgroundColor: mainTheme.palette.secondary.main}}>
      <CardContent>
        <Typography align="center">{editFarmData.name}</Typography>
        <Box sx={{display: 'flex',height:'200px', margin:'20px 0px 40px 0px'}}>
          {/* <Image sx={{ width: '50%', height: '100%' }} src={imgSelected} alt={imgSelected !== '' ? "Product Image" : "Default Product Image"}/> */}
          <CardMedia
            component="img"
            height="auto"
            alt={imgSelected !== '' ? "Product Image" : "Default Product Image"}
            image={imgSelected === '' ? defaultPepinillo : imgSelected}
            style={{ objectFit: 'fill'}}
          />
          <UploadWidgetComponent handleImageValue={handleImageValue} handleImageLoading={handleImageLoading}  width='50%' height='250px'/>
        </Box>
        <FormControl fullWidth>
        <InputLabel id="top">Type of product</InputLabel>
          <Select
            label='Type of product'
            labelId='top'
            onChange={onSelectedOptionChange}
            value={selectedOption}
            sx={{backgroundColor: '#F5F5F5' , marginBottom: '20px'}}
          >
            {productsType.map((product) => (
              <MenuItem key={product.productId} value={product.productId}>
                {product.productName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        
        <Box sx={{display:'flex'}}>
          <TextField 
            onChange={handleStockChange}
            label="Product stock" 
            variant="outlined" 
            value={productStock}
            InputProps={{ style: { backgroundColor: '#F5F5F5'} }}
            sx={{ marginBottom: '20px', flexGrow: '1', marginRight: '10px' }}
          />
          <FormControl sx={{flexGrow: '0', width: '25%'}}>
            <InputLabel id="measure">Measure</InputLabel>
            <Select
              value={productMeasurement}
              label='measurement'
              labelId='measure'
              variant="outlined"
              onChange={handleMeasureChange}
              sx={{backgroundColor: '#F5F5F5',marginBottom: '20px'}}
            >
              <MenuItem value="kg">kg</MenuItem>
              <MenuItem value="liter">litre</MenuItem>
              <MenuItem value="unit">unit</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{display:'flex'}}>
        <TextField 
            onChange={handlePriceChange}
            label="Product price" 
            variant="outlined" 
            value={productPrice}
            InputProps={{ style: { backgroundColor: '#F5F5F5'} }}
            sx={{ marginBottom: '20px', flexGrow: '1', marginRight: '10px' }}
          />
          <FormControl sx={{flexGrow: '0',width: '25%'}}>
            <InputLabel id="measure">Measure</InputLabel>
            <Select
              value={productMeasurement}
              label='measurement'
              labelId='measure'
              variant="outlined"
              onChange={handleMeasureChange}
              sx={{backgroundColor: '#F5F5F5',marginBottom: '20px'}}
            >
              <MenuItem value="kg">€/kg</MenuItem>
              <MenuItem value="litre">€/litre</MenuItem>
              <MenuItem value="unit">€/unit</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{paddingRight:'10px'}}>
        <TextareaAutosize
        style={{
          width: '100%',
          height: '100px',
          overflow: 'hidden',
          overflowY: 'scroll',
          resize: 'none',
          marginBottom:'20px',
        }}
        placeholder={'Description'}
        onChange={(e)=> {
          setProductDescription(e.target.value)
        }}
      />
        </Box>
        <Box sx={{display:'flex' }}>
          <ButtonComponent text='Add product to farm' bgColour='green' textColour='white' width='50%' margin='0px 5px 0px 0px' fx={onAddProductClick}/>
          <ButtonComponent text='Cancel' bgColour='red' textColour='white' width='50%' margin='0px 5px 0px 5px' fx={onCancelClick}/>
        </Box>
      </CardContent>
    </Card>
    </Box>
  )
}

export default FarmAddProductCardComponent