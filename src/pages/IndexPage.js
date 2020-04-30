import React from 'react'

import LayoutDefault from '@layouts/LayoutDefault'

import pageData from '@variables/pageData'

function IndexPage() {
  return (
    <LayoutDefault>
      <h2>{pageData.index.title}</h2>
    </LayoutDefault>
  )
}

export default IndexPage
