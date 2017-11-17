import * as actions from 'actions'
import * as types from 'actionTypes'

describe('actions', () => {
  it('should create an action to get categories', () => {
    const expectedAction = {
      type: types.GET_CATEGORIES_REQUEST,
    }
    expect(actions.getCategories()).toEqual(expectedAction)
  })
})
