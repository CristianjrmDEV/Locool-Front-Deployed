import React from 'react'
import './AppPage.css'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import BasicMap from '../../components/MapComponent/MapComponent'

const AppPage = () => {

  return (
    <>
      <BasicMap/>
      <PageTitleComponent title={'App page'} />
    </>
  )
}

export default AppPage
