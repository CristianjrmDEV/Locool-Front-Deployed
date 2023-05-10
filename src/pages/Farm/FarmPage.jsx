import React, {useState } from 'react'
import './FarmPage.css'
import { Box } from '@mui/material'
import FarmListComponent from '../../components/FarmList/FarmListComponent'
import FarmAddCardComponent from '../../components/FarmAddCard/FarmAddCardComponent'
import FarmEditCardComponent from '../../components/FarmEditCard/FarmEditCardComponent'
import { FarmPageContext } from '../../contexts/farm'
import FarmSeeProductsCardComponent from '../../components/FarmSeeProductsCard/FarmSeeProductsCardComponent'
import FarmAddProductCardComponent from '../../components/FarmAddProductCard/FarmAddProductCardComponent'
import FarmEditProductCardComponent from '../../components/FarmEditProductCard/FarmEditProductCardComponent'

const FarmPage = () => {

  const [componentView,setComponentView] = useState('FarmListComponent')

  const [editFarmData,setEditFarmData] = useState({})
  const [editProductData, setEditProductData] = useState({})

  const handleComponentView = (data) =>{
    setComponentView(data)
  }

  return (
    <Box sx={{width:'100%'}}>
      <FarmPageContext.Provider value={{setEditFarmData, editFarmData,setEditProductData,editProductData}}>
        {
        componentView === 'FarmListComponent' 
          ? <FarmListComponent handleComponent={handleComponentView}/>
            : componentView === 'FarmAddCardComponent' 
              ? <FarmAddCardComponent handleComponent={handleComponentView} />
                : componentView === 'FarmSeeProductsCardComponent'
                  ? <FarmSeeProductsCardComponent handleComponent={handleComponentView}/>
                    : componentView === 'FarmAddProductCardComponent'
                      ? <FarmAddProductCardComponent handleComponent={handleComponentView}/>
                        : componentView === 'FarmEditProductCardComponent'
                          ? <FarmEditProductCardComponent handleComponent={handleComponentView}/>
                            : <FarmEditCardComponent handleComponent={handleComponentView}/>
        }
      </FarmPageContext.Provider>
    </Box>
  )
}

export default FarmPage