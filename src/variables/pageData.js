import range from 'lodash/range'
import faker from 'faker'

export default {
  index: {
    title: 'Index Page',
  },

  test: {
    title: 'Test Page',
    animals: ['Ant', 'Bird', 'Cat'],
  },

  carousel: {
    title: 'Carousel Page',
    nameList: range(10).map((n) => faker.name.findName()),
  },
}
