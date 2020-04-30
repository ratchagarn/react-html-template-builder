import IndexPage from '@pages/IndexPage'
import TestPage from '@pages/TestPage'

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
]
