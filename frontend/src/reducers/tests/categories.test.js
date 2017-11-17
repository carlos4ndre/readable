import reducer from 'reducers'
import * as actions from 'actions'

describe('categories reducer', () => {
  const initialState  = {
    categories: {
      allIds: [],
      byId: {},
    },
    comments: {
      allIds: [],
      byId: {},
      isFetchingComments: false,
    },
    posts: {
      allIds: [],
      byId: {},
      isFetchingPost: false,
      isFetchingPosts: false,
    },
    form: {}
  }

  it('should return the initial state', () => {
    const action = {}
    const state = undefined
    const nextState = initialState

    expect(reducer(state, action)).toEqual(initialState)
  })

  // TODO: add action creators for success and failure
  //it('should handle GET_CATEGORIES_SUCCESS', () => {
  //  const action = actions.getCategoriesSucess()
  //  const state = initialState
  //  const nextState = initialState

  //  expect(reducer(state, action)).toEqual(nextState)
  //})
})
