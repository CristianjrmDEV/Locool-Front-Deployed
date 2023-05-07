import React from 'react'
import './PurchasePage.css'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import {
  getPurchasesByUsername,
  getUserCart,
} from '../../services/purchaseService'
import PurchaseCardComponent from '../../components/PurchaseCard/PurchaseCardComponent'
import PurchaseListComponent from '../../components/PurchaseList/PurchaseListComponent'
import { Box } from '@mui/material'

const PurchasePage = () => {
  ;(async () =>
    console.log(
      await getPurchasesByUsername(localStorage.getItem('username'))
      // await getUserCart(localStorage.getItem('username'),3)
    ))()

  const purchases = [
    {
      id: 1,
      status: 'booked',
      createdAt: '2023-03-29T10:00:00.000Z',
      updatedAt: '2023-03-29T10:30:00.000Z',
      userId: 11,
    },
    {
      id: 3,
      status: 'cancelled',
      createdAt: '2023-03-29T12:00:00.000Z',
      updatedAt: '2023-03-29T12:30:00.000Z',
      userId: 11,
    },
    {
      id: 5,
      status: 'booked',
      createdAt: '2023-03-29T14:00:00.000Z',
      updatedAt: '2023-03-29T14:30:00.000Z',
      userId: 11,
    },
  ]

  // const purchase = {
  //   id: '10',
  //   farm: 'The best farm ever',
  //   date: '12/02/2021',
  //   total: '2.01 €',
  // }

  return (
    <Box>
      <PageTitleComponent title={'Purchases'} />
      <PurchaseListComponent purchases={purchases} />
      {/* <PurchaseCardComponent purchase={purchase} /> */}
    </Box>
  )
}

export default PurchasePage
