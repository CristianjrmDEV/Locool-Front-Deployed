import React from 'react'
import './CartPage.css'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import ShoppingCartComponent from '../../components/ShoppingCart/ShoppingCartComponent'

const CartPage = () => {
  return (
    <>
      <PageTitleComponent title={'Shopping Cart'} />
      <ShoppingCartComponent/>
    </>
  )
}

export default CartPage