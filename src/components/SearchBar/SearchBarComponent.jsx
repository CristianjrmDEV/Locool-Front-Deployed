import React, { useEffect, useState } from 'react'
import './SearchBarComponent.css'
import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'
import SearchIcon from '@mui/icons-material/Search'
import WarehouseIcon from '@mui/icons-material/Warehouse'

import { getProducts } from '../../services/productService'
import { getFarms } from '../../services/farmService'

// (async () => console.log(await getProducts()))()
// (async () => console.log(await getFarms()))()

const SearchBarComponent = () => {
  const [products, setProducts] = useState([])
  const [farms, setFarms] = useState([])
  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleProductSearch = async () => {
    const result = await getProducts()
    setProducts(result)
    console.log('searched products: ', result)
  }
  const handleFarmSearch = async () => {
    const result = await getFarms()
    setFarms(result)
    console.log('searched farms: ', result)
  }

  const displayProducts = () => {
    if (products.length > 0) {
      return (
        <Box>
          <Typography variant='h6'>Products</Typography>
          {products.map((product, idx) => {
            return <Box key={idx}>{product.img_url}</Box>
          })}
        </Box>
      )
    }
  }

  const displayFarms = () => {
    if (farms.length > 0) {
      return (
        <Box>
          <Typography variant="h6">Farms</Typography>
          {farms.map((farm, idx) => {
            return <Box key={idx}>{farm.address}</Box>
          })}
        </Box>
      )
    }
  }

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: mainTheme.palette.secondary.main,
          p: 1,
        }}
      >
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleProductSearch}>
                  <SearchIcon fontSize="large" />
                </IconButton>
                <Divider
                  sx={{ height: 28, m: 0.5 }}
                  orientation="vertical"
                />
                <IconButton onClick={handleFarmSearch}>
                  <WarehouseIcon fontSize="large" />
                </IconButton>
              </InputAdornment>
            ),
          }}
          id="outlined-basic"
          label="products | farms"
          variant="outlined"
          color="red"
          value={query}
          onChange={handleChange}
          sx={{}}
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        {displayProducts()}
        {displayFarms()}
      </Box>
    </>
  )
}

export default SearchBarComponent
