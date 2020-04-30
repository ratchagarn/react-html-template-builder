import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import router from '@pages/router'

function App() {
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
