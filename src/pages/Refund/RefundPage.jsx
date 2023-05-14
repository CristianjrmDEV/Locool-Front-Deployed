import React, { useEffect, useState } from 'react'
import './RefundPage.css'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import { getRefundsByUsername } from '../../services/refundService'
import RefundListComponent from '../../components/RefundList/RefundListComponent'
import { Box } from '@mui/material'
import NoDataComponent from '../../components/NoData/NoDataComponent'
import LoadingComponent from '../../components/Loading/LoadingComponent'

const RefundPage = () => {
  const [refunds, setRefunds] = useState([])
  const [loading, setLoading] = useState(true)

  const getUserRefunds = async () => {
    const result = await getRefundsByUsername(
      localStorage.getItem('locoolUsername')
    )
    setLoading(false)
    setRefunds(result)
  }

  useEffect(() => {
    getUserRefunds()
  }, [])

  const displayRefunds = () =>
    refunds.length > 0 ? (
      <RefundListComponent refunds={refunds} />
    ) : (
      <NoDataComponent text="There are no refunds" />
    )

  return (
    <Box
      width={'80%'}
      sx={{ m: '10px auto 50px auto' }}
    >
      <PageTitleComponent title={'Refunds'} />
      {loading ? <LoadingComponent spinnerSize={200} /> : displayRefunds()}
    </Box>
  )
}

export default RefundPage
