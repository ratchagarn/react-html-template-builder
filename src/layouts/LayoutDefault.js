import React, { useEffect } from 'react'

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
    <div className="layout-default">
      <Header />
      <Nav />
      {children}
    </div>
  )
}

export default LayoutDefault
