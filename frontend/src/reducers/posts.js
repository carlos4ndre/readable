import { Map } from 'immutable'
import {
  GET_POSTS_SUCCESS,
  GET_CATEGORY_POSTS_SUCCESS,
} from 'actions/posts'

const initialState = Map({})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
    case GET_CATEGORY_POSTS_SUCCESS:
      return postsMap(state, action)
    default:
      return state
  }
}

const postsMap = (state, action) => (
  Map(action.posts.map(
    post => [post.id, post]
  ))
)

export default reducer
