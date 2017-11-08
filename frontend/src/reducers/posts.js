import { UP_VOTE } from 'data/vote'
import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_CATEGORY_POSTS_REQUEST,
  GET_CATEGORY_POSTS_SUCCESS,
  CREATE_POST_SUCCESS,
  VOTE_POST_SUCCESS
} from 'actions/posts'

const initialState = {
  byId: {},
  allIds: [],
  isFetching: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
    case GET_CATEGORY_POSTS_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case GET_POSTS_SUCCESS:
    case GET_CATEGORY_POSTS_SUCCESS:
      return {
        ...addPosts(state, action.posts),
        isFetching: false
      }
    case CREATE_POST_SUCCESS:
      return addPost(state, action.post)
    case VOTE_POST_SUCCESS:
      return updatePostScore(state, action.postId, action.value)
    default:
      return state
  }
}

const addPosts = (state, posts = []) => (
  posts.reduce((obj, post) => addPost(obj, post), state)
)

const addPost = (state, post) => ({
  ...state,
  byId: {
    ...state.byId,
    [post.id]: post,
  },
  allIds: state.allIds.concat(post.id)
})

const updatePostScore = (state, postId, value) => {
  const post = state.byId[postId]
  const points = value === UP_VOTE ? 1 : -1

  return {
    ...state,
    byId :{
      ...state.byId,
      [postId]: {
        ...post,
        voteScore: post.voteScore + points
      }
    }
  }
}

export default reducer
