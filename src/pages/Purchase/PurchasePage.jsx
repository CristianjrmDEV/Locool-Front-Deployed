import React, { useEffect, useState } from 'react'
import './PurchasePage.css'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import {
  getPurchasesByUsername,
} from '../../services/purchaseService'
import PurchaseListComponent from '../../components/PurchaseList/PurchaseListComponent'
import { Box } from '@mui/material'

const PurchasePage = () => {
  const [purchases, setPurchases] = useState([])

  const getUserPurchases = async () => {
    const result = await getPurchasesByUsername(
      localStorage.getItem('locoolUsername')
    )
    setPurchases(result)
    // console.log(result)
  }

  useEffect(() => {
    getUserPurchases()
  }, [])

  return (
    <Box sx={{width:'80%'}}>
      <PageTitleComponent title={'Purchases'} />
      <PurchaseListComponent purchases={purchases} />
    </Box>
  )
}

export default PurchasePage
