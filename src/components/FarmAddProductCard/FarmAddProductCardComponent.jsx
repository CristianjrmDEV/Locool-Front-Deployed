import { Avatar, Box, Card, CardContent, CardHeader, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import PageTitleComponent from '../PageTitle/PageTitleComponent'
import ButtonComponent from '../Button/ButtonComponent'
import { mainTheme } from '../../themes/mainTheme'
import { addProductToFarm } from '../../services/userService'
import { FarmsContext } from '../../contexts/farm'
import { getAllProducts } from '../../services/userService'

const FarmAddProductCardComponent = (props) => {

  const { editFarmData } = useContext(FarmsContext)

  const [productsType,setProductsType] = useState([])

  const [selectedOption, setSelectedOption] = useState('Select Option');
  const [imgSelected, setImgSelected] = useState('')
  const [productStock,setProductStock] = useState('')
  const [productPrice,setProductPrice] = useState(0)
  const [productDescription,setProductDescription] = useState('')

  const newProduct = {
    productId: selectedOption,
    img_url: imgSelected,
    stock: productStock,
    price: productPrice,
    description: productDescription
  }


  const onSelectedOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(selectedOption)
  };

  const onAddProductClick = async() =>{
    // const result = await addProductToFarm()
    console.log(productsType)
  }

  const onCancelClick = () => {
    props.handleComponent('FarmListComponent')
  }

  const getProductsType = async() => {
    const result = await getAllProducts()
    console.log(result)
    setProductsType(result)

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
        <Select value={selectedOption} onChange={onSelectedOptionChange}>
          {productsType.map((product) => (
            <MenuItem key={product.farms.productId} value={product.farms.productId}>
              {product.productName}
            </MenuItem>
          ))}
        </Select>
        <TextField 
          onChange={(e) => setImgSelected(e.target.value)}
          label="Image" 
          variant="outlined" 
          fullWidth={true}
          InputProps={{ style: { backgroundColor: '#F5F5F5' } }}
          sx={{ marginBottom: '20px' }}
        />
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