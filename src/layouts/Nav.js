import React from 'react'
import { Link } from 'react-router-dom'

import router from '@pages/router'

function Nav() {
  return (
    <nav className="nav">
      <ul>
        {router.map((route) => (
          <li key={route.key}>
            <Link to={route.path}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
