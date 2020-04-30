import React from 'react'

import Link from '@components/Link'

import router from '@config/router'

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
