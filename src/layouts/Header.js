import React from 'react'
import styled from '@emotion/styled'

function Header() {
  return (
    <HeaderTag data-class="header">
      <h1>React HTML Template Builder</h1>
    </HeaderTag>
  )
}

export default Header

const HeaderTag = styled.header`
  > h1 {
    padding-bottom: 8px;
    border-bottom: 1px solid #ccc;
  }
`
