import {
  GET_CATEGORIES_SUCCESS,
} from 'actions/categories'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return action.categories
    default:
      return state
  }
}

export default reducer
