import IndexPage from '@pages/IndexPage'
import TestPage from '@pages/TestPage'

export default [
  {
    key: 'index',
    label: 'Index',
    path: '/',
    component: IndexPage,
  },
  {
    key: 'test',
    label: 'Test',
    path: '/test',
    component: TestPage,
  },
]
