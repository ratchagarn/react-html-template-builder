import React from 'react'
import styled from '@emotion/styled'

function Button({ children, ...props }) {
  return (
    <ButtonContent data-class="btn" {...props}>
      {children}
    </ButtonContent>
  )
}

export default Button

const ButtonContent = styled.button`
  display: inline-block;
  padding: 8px 16px;
  border: 0;
  font-size: 12px;
  user-select: none;
  cursor: pointer;
  outline: none;
  background-color: #eee;
  border-radius: 2px;
`
