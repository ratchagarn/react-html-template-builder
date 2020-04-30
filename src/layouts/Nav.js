import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

import router from '@config/router'

function Nav() {
  return (
    <NavContent data-class="nav">
      <ul>
        {router.map((route) => (
          <li key={route.key}>
            <Link to={route.path}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </NavContent>
  )
}

export default Nav

const NavContent = styled.nav`
  ul {
    margin: 0;
    padding: 0;

    > li {
      display: inline-block;
      margin-right: 8px;

      > a {
        color: blue;

        &:hover {
          color: red;
        }
      }
    }
  }
`
