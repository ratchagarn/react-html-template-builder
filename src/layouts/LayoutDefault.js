import React from 'react'

import Header from './Header'
import Nav from './Nav'

function LayoutDefault({ children }) {
  return (
    <div className="layout-default">
      <Header />
      <Nav />
      {children}
    </div>
  )
}

export default LayoutDefault
