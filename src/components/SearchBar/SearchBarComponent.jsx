import React, { useContext, useState } from 'react'
import './SearchBarComponent.css'
import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  InputBase,
  Paper,
  TextField,
} from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'
import SearchIcon from '@mui/icons-material/Search'
import WarehouseIcon from '@mui/icons-material/Warehouse'
import { lookForProducts } from '../../services/productService'
import { lookForFarms } from '../../services/farmService'
import { FarmsContext } from '../../contexts/farm'
import { ProductsContext } from '../../contexts/product'
import { useNavigate } from 'react-router-dom'
import { PopupComponent } from '../Popup/PopupComponent'
import { LoadingIcon } from '../Icon/IconComponent'
import { width } from '@mui/system'

const SearchBarComponent = () => {
  const GLOBAL_Product = useContext(ProductsContext)
  const GLOBAL_Farm = useContext(FarmsContext)
  const [loading, setLoading] = useState(false)
  const [searchResult, setSearchResult] = useState('')

  const goTo = useNavigate()

  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase())
  }

  const handleProductSearch = async () => {
    setSearchResult('')
    setLoading(true)
    const result = await lookForProducts(query)
    GLOBAL_Product.set(result)
    setLoading(false)
    result.length > 0
      ? setSearchResult('see results on the map')
      : setSearchResult('0 results, try something different')
    goTo('/app')
    setTimeout(() => {
      setSearchResult('')
    }, 2000)
  }

  const handleFarmSearch = async () => {
    setSearchResult('')
    setLoading(true)
    const result = await lookForFarms(query)
    GLOBAL_Farm.set(result)
    setLoading(false)
    result.length > 0
      ? setSearchResult('see results on the map')
      : setSearchResult('0 results, try something different')
    goTo('/app')
    setTimeout(() => {
      setSearchResult('')
    }, 2000)
  }

  const displayHelpBar = () => {
    return (
      <Box
        sx={{
          backgroundColor: mainTheme.palette.green.main,
          display: 'flex',
          justifyContent: 'space-between',
          mt: 1,
          px: 2,
          height: '50px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignSelf: 'center',
            justifyContent: 'center',
            width: '100%',
            pl: 2,
          }}
        >
          <Box>{searchResult}</Box>
          <Box>{loading ? <LoadingIcon size={50} /> : ''}</Box>
        </Box>
        <PopupComponent />
      </Box>
    )
  }

  return (
    <>
      <Box sx={{ backgroundColor: mainTheme.palette.secondary.main, pt: 1 }}>
        <Paper
          component="form"
          elevation={0}
          sx={{
            m: 'auto',
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 400,
            borderRadius: 10,
          }}
        >
          <InputBase
            className="search-placeholder"
            sx={{ ml: 1, flex: 1, color: mainTheme.palette.primary.main }}
            placeholder="Products | Farms"
            inputProps={{
              'aria-label': 'Products | Farms',
              color: mainTheme.palette.red.main,
            }}
            value={query}
            onChange={handleChange}
          />
          <IconButton
            onClick={handleProductSearch}
            sx={{
              p: 1,
              '&:hover': {
                color: mainTheme.palette.green.main,
                backgroundColor: mainTheme.palette.white.main,
              },
            }}
          >
            <SearchIcon fontSize="large" />
          </IconButton>
          <Divider
            sx={{
              height: 28,
              m: 0.5,
              backgroundColor: mainTheme.palette.secondary.main,
            }}
            orientation="vertical"
          />
          <IconButton
            onClick={handleFarmSearch}
            sx={{
              p: 1,
              '&:hover': {
                color: mainTheme.palette.green.main,
                backgroundColor: mainTheme.palette.white.main,
              },
            }}
          >
            <WarehouseIcon fontSize="large" />
          </IconButton>
        </Paper>
        {displayHelpBar()}
      </Box>
    </>
  )
}

export default SearchBarComponent
