import React from 'react'
import './PurchasePage.css'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import {
  getPurchasesByUsername,
  getUserCart,
} from '../../services/purchaseService'
import PurchaseCardComponent from '../../components/PurchaseCard/PurchaseCardComponent'

const PurchasePage = () => {
  (async () =>
    console.log(
      await getPurchasesByUsername(localStorage.getItem('username')),
      // await getUserCart(localStorage.getItem('username'),3)
    ))()
    

const purchase = {
  id: '10',
  farm: 'The best farm ever',
  date: '12/02/2021',
  total: '2.01 €',
}

  return (
    <>
      <PageTitleComponent title={'Purchases'} />
      <PurchaseCardComponent purchase={purchase} />
    </>
  )
}


export default PurchasePage