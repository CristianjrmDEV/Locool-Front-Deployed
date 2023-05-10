import React from 'react'
import './BasicPage.css'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import BasicBodyComponent from '../../components/BasicPageBody/BasicPageBodyComponent'

const BasicPage = () => {
  return (
    <>
      <PageTitleComponent title={'Basic page'} />
      <BasicBodyComponent/>
    </>
  )
}

export default BasicPage