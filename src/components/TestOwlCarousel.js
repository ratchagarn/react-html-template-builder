import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

function TestOwlCarousel({ data }) {
  return (
    <OwlCarousel id="testOwlCarousel" data-class="test-owl-carousel">
      <div className="owl-carousel">
        {data.map((name) => (
          <div key={name}>
            <div className="find-name">{name}</div>
          </div>
        ))}
      </div>
    </OwlCarousel>
  )
}

TestOwlCarousel.propTypes = {
  data: PropTypes.array,
}

TestOwlCarousel.defaultProps = {
  data: [],
}

export default TestOwlCarousel

const OwlCarousel = styled.div`
  margin-bottom: 40px;

  .owl-item {
    text-align: center;

    .find-name {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 200px;
      border: 4px solid #454545;
      background-color: #eee;
      font-size: 20px;
      border-radius: 4px;
    }
  }

  .owl-nav {
    margin-top: 8px;
    text-align: center;

    button.owl-prev,
    button.owl-next {
      margin: 0 4px;
      font-size: 40px;
      outline: none;
    }
  }

  .owl-dots {
    margin-top: 8px;
    text-align: center;

    .owl-dot {
      width: 16px;
      height: 16px;
      margin: 0 4px;
      background-color: #efefef;
      outline: none;
      border-radius: 50%;
      transition: 0.2s;

      &:hover {
        background-color: orange;
      }

      &.active {
        background-color: red;
      }
    }
  }
`
