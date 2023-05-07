import React, { useEffect, useState } from 'react'
import './RefundPage.css'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import { getRefundsByUsername } from '../../services/refundService'
import RefundListComponent from '../../components/RefundList/RefundListComponent'
import { Box } from '@mui/material'

const RefundPage = () => {

  const [refunds, setRefunds] = useState([])

  const getUserRefunds = async () => {
    const result = await getRefundsByUsername(localStorage.getItem('username'))
    setRefunds(result.purchases)
  }

  useEffect(() => {
    getUserRefunds()
  }, [])

  return (
    <Box>
      <PageTitleComponent title={'Refund'} />
      <RefundListComponent refunds={refunds} />
    </Box>
  )
}

export default RefundPage
