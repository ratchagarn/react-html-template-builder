import React, { useEffect } from 'react'
import styled from '@emotion/styled'

import Header from './Header'
import Nav from './Nav'

const injectScriptName = '__inject_script__'

function LayoutDefault({ children }) {
  useEffect(() => {
    const injectScript = document.getElementById(injectScriptName)
    const script = document.createElement('script')
    script.id = injectScriptName
    script.src = '/assets/app.js'

    if (injectScript) {
      injectScript.parentNode.replaceChild(script, injectScript)
    } else {
      document.body.appendChild(script)
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
