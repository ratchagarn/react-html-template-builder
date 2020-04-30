import IndexPage from './IndexPage'
import TestPage from './TestPage'

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
