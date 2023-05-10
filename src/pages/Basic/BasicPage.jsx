import React from 'react'
import './BasicPage.css'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import DemoCarousel from '../../components/DemoCarousel/DemoCarouselComponent'
const BasicPage = () => {
  return (
    <>
      <PageTitleComponent title={'Basic page'} />
      <DemoCarousel/>
    </>
  )
}

export default BasicPage