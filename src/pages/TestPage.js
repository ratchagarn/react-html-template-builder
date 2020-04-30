import React from 'react'
import styled from '@emotion/styled'

import LayoutDefault from '@layouts/LayoutDefault'

import Button from '@components/Button'

import pageData from '@variables/pageData'

function TestPage() {
  return (
    <LayoutDefault>
      <h2>{pageData.test.title}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <ul>
        {pageData.test.animals.map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>

      <Button id="clickMe">Click Me!</Button>
      <MoveBox data-class="move-box" id="moveBox" />

      <TestBox1 data-class="test-box1" />
      <TestBox2 data-class="test-box2" />
      <TestBox3 data-class="test-box3" />
    </LayoutDefault>
  )
}

export default TestPage

const MoveBox = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 16px;
  background-color: pink;
  border-radius: 4px;
  transform: translateX(0);
  transition: 0.2s;

  &.move {
    transform: translateX(300%);
  }
`

const TestBox1 = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 16px;
  background-color: red;
  border-radius: 50%;
  transition: 0.2s;

  &:hover {
    opacity: 0.6;
  }
`

const TestBox2 = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 16px;
  background-color: pink;
  border-radius: 50%;

  &:hover {
    opacity: 0.6;
  }
`

const TestBox3 = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 16px;
  background-color: lightblue;
  border-radius: 50%;

  &:hover {
    opacity: 0.6;
  }
`
