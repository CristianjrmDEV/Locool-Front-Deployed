import React, { useEffect, useState } from 'react'
import './PurchasePage.css'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import { getPurchasesByUsername } from '../../services/purchaseService'
import PurchaseListComponent from '../../components/PurchaseList/PurchaseListComponent'
import { Box } from '@mui/material'
import NoDataComponent from '../../components/NoData/NoDataComponent'
import LoadingComponent from '../../components/Loading/LoadingComponent'

const PurchasePage = () => {
  const [purchases, setPurchases] = useState([])
  const [loading, setLoading] = useState(true)

  const getUserPurchases = async () => {
    const result = await getPurchasesByUsername(
      localStorage.getItem('locoolUsername')
    )
    setLoading(false)
    setPurchases(result)
  }

  useEffect(() => {
    getUserPurchases()
  }, [])

  const displayPurchases = () =>
    purchases.length > 0 ? (
      <PurchaseListComponent purchases={purchases} />
    ) : (
      <NoDataComponent text="There are no purchases" />
    )

  return (
    <Box >
      <PageTitleComponent title={'Purchases'} />
      {loading ? <LoadingComponent spinnerSize={200} /> : displayPurchases()}
    </Box>
  )
}

export default PurchasePage
