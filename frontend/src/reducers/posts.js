import {
  GET_POSTS_SUCCESS,
  GET_CATEGORY_POSTS_SUCCESS,
} from 'actions/posts'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return action.posts
    case GET_CATEGORY_POSTS_SUCCESS:
      return action.posts
    default:
      return state
  }
}

export default reducer
