import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_CATEGORY_POSTS,
  GET_CATEGORY_POSTS_SUCCESS,
} from 'actions/posts'

const initialState = {
  byId: {},
  allIds: [],
  isFetching: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
    case GET_CATEGORY_POSTS:
      return {
        ...state,
        isFetching: true,
      }
    case GET_POSTS_SUCCESS:
    case GET_CATEGORY_POSTS_SUCCESS:
      return {
        ...addPosts(state, action),
        isFetching: false,
      }
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
    },
    allIds: obj.allIds.concat(post.id)
  }), state)
)

export default reducer
