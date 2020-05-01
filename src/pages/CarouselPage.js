import React from 'react'

import LayoutDefault from '@layouts/LayoutDefault'

import TestOwlCarousel from '@components/TestOwlCarousel'

import pageData from '@variables/pageData'

function CarouselPage() {
  const { title, getNameList } = pageData.carousel

  return (
    <LayoutDefault>
      <h2>{title}</h2>

      <TestOwlCarousel data={getNameList()} />
      <TestOwlCarousel data={getNameList()} />
    </LayoutDefault>
  )
}

export default CarouselPage
