import React from 'react'
import './RefundPage.css'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import { getRefundsByUsername } from '../../services/refundService'
import { getPurchasesByUsername } from '../../services/purchaseService'
import RefundListComponent from '../../components/RefundList/RefundListComponent'
import { Box } from '@mui/material'

const RefundPage = () => {
    (async () =>
      console.log(
        // await getRefundsByUsername(localStorage.getItem('username')),
        // await getPurchasesByUsername(localStorage.getItem('username'))

      ))()

        const refunds = [
          {
            id: 1,
            status: 'accepted',
            createdAt: '2023-03-29T10:00:00.000Z',
            updatedAt: '2023-03-29T10:30:00.000Z',
            userId: 11,
            purchaseId: 1,
          },
          {
            id: 3,
            status: 'denied',
            createdAt: '2023-03-29T12:00:00.000Z',
            updatedAt: '2023-03-29T12:30:00.000Z',
            userId: 11,
            purchaseId: 5,
          },
          {
            id: 5,
            status: 'pending',
            createdAt: '2023-03-29T14:00:00.000Z',
            updatedAt: '2023-03-29T14:30:00.000Z',
            userId: 11,
            purchaseId: 3,
          },
        ]
  return (
    <Box>
      <PageTitleComponent title={'Refund'} />
      <RefundListComponent refunds={refunds} />
    </Box>
  )
}

export default RefundPage