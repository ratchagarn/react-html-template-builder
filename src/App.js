import React, { useEffect } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import router from '@config/router'
import scriptList from '@config/scriptList'

function App() {
  useEffect(() => {
    scriptList.forEach((src) => {
      const s = document.createElement('script')
      s.src = src

      document.body.appendChild(s)
    })
  }, [])

  return (
    <Router>
      <Switch>
        {router.map((route) => (
          <Route key={route.key} exact path={route.path}>
            {route.component}
          </Route>
        ))}
      </Switch>
    </Router>
  )
}

export default App
