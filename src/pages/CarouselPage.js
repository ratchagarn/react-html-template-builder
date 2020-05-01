import React from 'react'
import styled from '@emotion/styled'

import LayoutDefault from '@layouts/LayoutDefault'

import pageData from '@variables/pageData'

function CarouselPage() {
  const { title, nameList } = pageData.carousel

  return (
    <LayoutDefault>
      <h2>{title}</h2>

      <OwlCarousel id="testOwlCarousel" data-class="test-owl-carousel">
        <div className="owl-carousel">
          {nameList.map((name) => (
            <div key={name}>
              <div className="find-name">{name}</div>
            </div>
          ))}
        </div>
      </OwlCarousel>
    </LayoutDefault>
  )
}

export default CarouselPage

const OwlCarousel = styled.div`
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
