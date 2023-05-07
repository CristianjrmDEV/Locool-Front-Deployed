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
      detail: {
        id: 1,
        status: 'booked',
        createdAt: '2023-03-29T10:00:00.000Z',
        updatedAt: '2023-03-29T10:30:00.000Z',
        userId: 11,
        farm: 'the happy farm',
        total: '30.59 €',
      },
      cart: [
        { name: 'kiwi', qty: '2 kg', price: '7.00 €' },
        { name: 'apple', qty: '1.5 kg', price: '3.52 €' },
        { name: 'melon', qty: '3 kg', price: '6.32 €' },
      ],
    },
    {
      detail: {
        id: 3,
        status: 'cancelled',
        createdAt: '2023-03-29T12:00:00.000Z',
        updatedAt: '2023-03-29T12:30:00.000Z',
        userId: 11,
        farm: 'the farm of my brother and I',
        total: '10.50 €',
      },
      cart: [
        { name: 'apple', qty: '1.5 kg', price: '1503.52 €' },
        { name: 'melon', qty: '3 kg', price: '6.32 €' },
      ],
    },
    {
      detail: {
        id: 5,
        status: 'booked',
        createdAt: '2023-03-29T14:00:00.000Z',
        updatedAt: '2023-03-29T14:30:00.000Z',
        userId: 11,
        farm: 'Cool bananas',
        total: '80.14 €',
      },
      cart: [{ name: 'melon', qty: '3 kg', price: '6.32 €' }],
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
