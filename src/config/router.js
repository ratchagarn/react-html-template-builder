import IndexPage from '@pages/IndexPage'
import TestPage from '@pages/TestPage'
import CarouselPage from '@pages/CarouselPage'

export default [
  {
    key: 'index',
    label: 'Index',
    path: '/index.html',
    component: IndexPage,
  },
  {
    key: 'test',
    label: 'Test',
    path: '/test.html',
    component: TestPage,
  },
  {
    key: 'carousel',
    label: 'Carousel',
    path: '/carousel.html',
    component: CarouselPage,
  },
]
