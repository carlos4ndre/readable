import * as actions from 'actions'
import * as types from 'actionTypes'
import categories from 'data/tests'

describe('actions', () => {
  const error = 'ups, something when wrong!'

  it('should create an action to get categories', () => {
    const expectedAction = {
      type: types.GET_CATEGORIES_REQUEST
    }
    expect(actions.getCategories()).toEqual(expectedAction)
  })

  it('should create an action for when get categories succeeds', () => {
    const expectedAction = {
      type: types.GET_CATEGORIES_SUCCESS,
      categories
    }
    expect(actions.getCategoriesSuccess(categories)).toEqual(expectedAction)
  })

  it('should create an action for when get categories fails', () => {
    const expectedAction = {
      type: types.GET_CATEGORIES_FAILURE,
      error
    }
    expect(actions.getCategoriesFailure(error)).toEqual(expectedAction)
  })
})
