import { Avatar, Box, Card, CardContent, CardHeader, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import PageTitleComponent from '../PageTitle/PageTitleComponent'
import ButtonComponent from '../Button/ButtonComponent'
import { mainTheme } from '../../themes/mainTheme'
import { addProductToFarm } from '../../services/userService'
import { FarmPageContext } from '../../contexts/farm'
import { getAllProducts } from '../../services/userService'
import UploadWidgetComponent from '../UploadWidget/UploadWidgetComponent'
import PropTypes from 'prop-types'


const FarmAddProductCardComponent = ({handleComponent}) => {

  FarmAddProductCardComponent.propTypes = {
    handleComponent: PropTypes.string
  }

  const { editFarmData } = useContext(FarmPageContext)

  const [productsType,setProductsType] = useState([])

  const [selectedOption, setSelectedOption] = useState('');
  const [imgSelected, setImgSelected] = useState('')
  const [productStock,setProductStock] = useState('')
  const [productPrice,setProductPrice] = useState(0)
  const [productDescription,setProductDescription] = useState('')

  const newProduct = {
    productId: selectedOption,
    image_url: imgSelected,
    stock: productStock,
    price: productPrice,
    description: productDescription
  }


  const onSelectedOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value)
  };

  const onAddProductClick = async() =>{
    const result = await addProductToFarm(localStorage.username,editFarmData.id,newProduct)
    console.log(newProduct)
    console.log(result)
  }

  const onCancelClick = () => {
    handleComponent('FarmListComponent')
  }

  const getProductsType = async() => {
    const result = await getAllProducts()
    console.log(result)
    setProductsType(result)

  }

  const handleImageValue = (img) => {
    setImgSelected(img)
  }

  useEffect(()=> {
    getProductsType()
  },[])

  return (
    <Card color='secondary' sx={{marginY:'10px', backgroundColor: mainTheme.palette.secondary.main}}>
      <CardHeader
        title={<PageTitleComponent title={'Add product'} />}
        action={
          <ButtonComponent text='Upload image' bgColour='green' textColour='white'/>
        }
      />
      <CardContent>
        <Typography>{editFarmData.name}</Typography>
        <UploadWidgetComponent handleImageValue={handleImageValue} />
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
        
        <TextField 
          onChange={(e) => setProductStock(e.target.value)}
          label="Product stock" 
          variant="outlined" 
          fullWidth={true}
          InputProps={{ style: { backgroundColor: '#F5F5F5' } }}
          sx={{ marginBottom: '20px' }}
        />
        <TextField 
          onChange={(e) => setProductPrice(e.target.value)}
          label="Product price" 
          variant="outlined" 
          fullWidth={true}
          InputProps={{ style: { backgroundColor: '#F5F5F5' } }}
          sx={{ marginBottom: '20px' }}
        />
        <TextField 
          onChange={(e) => setProductDescription(e.target.value)}
          label="Product description" 
          variant="outlined" 
          fullWidth={true}
          InputProps={{ style: { backgroundColor: '#F5F5F5' } }}
          sx={{ marginBottom: '20px' }}
        />
        <Box sx={{display:'flex' }}>
          <ButtonComponent text='Add product to farm' bgColour='green' textColour='white' width='50%' margin='0px 5px 0px 0px' fx={onAddProductClick}/>
          <ButtonComponent text='Cancel' bgColour='red' textColour='white' width='50%' margin='0px 5px 0px 5px' fx={onCancelClick}/>
        </Box>
      </CardContent>
    </Card>
  )
}

export default FarmAddProductCardComponent