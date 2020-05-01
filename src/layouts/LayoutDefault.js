import React, { useEffect } from 'react'
import styled from '@emotion/styled'

import Header from './Header'
import Nav from './Nav'

function LayoutDefault({ children }) {
  useEffect(() => {
    const script = document.createElement('script')
    script.async = true
    script.id = '__inject_app_script__'
    script.src = '/assets/app.js'

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <LayoutContent data-class="layout-default">
      <Header />
      <Nav />
      {children}
    </LayoutContent>
  )
}

export default LayoutDefault

const LayoutContent = styled.div`
  min-height: 100vh;
  padding: 16px;
`
