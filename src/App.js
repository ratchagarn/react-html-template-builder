import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import router from '@config/router'

function App() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'app.js'

    document.body.appendChild(script)
  }, [])

  return (
    <Router>
      <Switch>
        {router.map((route) => (
          <Route key={route.key} exact path={route.path}>
            {route.component}
          </Route>
        ))}
        <Route path="*">
          <Redirect to="/index.html" />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
