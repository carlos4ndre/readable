import {
  GET_POSTS_SUCCESS,
  GET_CATEGORY_POSTS_SUCCESS,
} from 'actions/posts'

const initialState = {
  byId: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
    case GET_CATEGORY_POSTS_SUCCESS:
      return addPosts(state, action)
    default:
      return state
  }
}

const addPosts = (state, action) => (
  action.posts.reduce((obj, post) => ({
    ...obj,
    byId: {
      ...obj.byId,
      [post.id]: post,
    }
  }), state)
)

export default reducer
