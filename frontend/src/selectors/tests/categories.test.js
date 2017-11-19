import * as selectors from 'selectors'
import * as data from 'data/tests'

describe('categories selector', () => {
  const initialState = data.initialState
  const category = data.category
  const categories = [ category ]
  const categoryId = category.name

  const stateWithCategory = {
    ...initialState,
    categories: {
      byId: {
        [categoryId]: category
      },
      allIds: [categoryId]
    }
  }

  it('should retrieve category', () => {
    const state = stateWithCategory
    expect(selectors.getCategory(state, categoryId)).toEqual(category)
  })

  it('should retrieve categories', () => {
    const state = stateWithCategory
    expect(selectors.getCategories(state)).toEqual(categories)
  })

  it('should retrieve isFetchingComments', () => {
    const state = stateWithCategory
    expect(selectors.isFetchingComments(state)).toEqual(false)
  })
})
