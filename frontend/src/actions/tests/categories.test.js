import * as actions from 'actions'
import * as types from 'actionTypes'

describe('actions', () => {
  const categories = [
    {
      name: 'react',
      path: 'react'
    },
    {
      name: 'redux',
      path: 'redux'
    },
    {
      name: 'udacity',
      path: 'udacity'
    }
  ]
  const error = 'ups, something when wrong!'

  it('should create an action to get categories [REQUEST]', () => {
    const expectedAction = {
      type: types.GET_CATEGORIES_REQUEST
    }
    expect(actions.getCategories()).toEqual(expectedAction)
  })

  it('should create an action to get categories [SUCCESS]', () => {
    const expectedAction = {
      type: types.GET_CATEGORIES_SUCCESS,
      categories
    }
    expect(actions.getCategoriesSuccess(categories)).toEqual(expectedAction)
  })

  it('should create an action to get categories [FAILURE]', () => {
    const expectedAction = {
      type: types.GET_CATEGORIES_FAILURE,
      error
    }
    expect(actions.getCategoriesFailure(error)).toEqual(expectedAction)
  })
})
