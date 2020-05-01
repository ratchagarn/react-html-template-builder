import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'

import router from '@config/router'

function Nav() {
  return (
    <NavContent data-class="nav">
      <ul>
        {router.map((route) => (
          <li key={route.key}>
            <NavLink to={route.path} activeClassName="selected">
              {route.label}
            </NavLink>
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
      margin-right: 16px;

      > a {
        color: blue;
        transition: 0.2s;

        &:hover {
          color: red;
          text-decoration: none;
        }

        &.selected {
          color: orange;
          font-weight: bold;
          text-decoration: none;
          pointer-events: none;
        }
      }
    }
  }
`
