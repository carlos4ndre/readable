import { UP_VOTE } from 'data/vote'
import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  GET_CATEGORY_POSTS_REQUEST,
  GET_CATEGORY_POSTS_SUCCESS,
  GET_CATEGORY_POSTS_FAILURE,
  CREATE_POST_SUCCESS,
  VOTE_POST_SUCCESS,
  DELETE_POST_SUCCESS
} from 'actions/posts'
import { GET_COMMENTS_SUCCESS } from 'actions/comments'

const initialState = {
  byId: {},
  allIds: [],
  isFetchingPosts: false,
  isFetchingPost: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // manage posts and category posts
    case GET_POSTS_REQUEST:
    case GET_CATEGORY_POSTS_REQUEST:
      return { ...state, isFetchingPosts: true }
    case GET_POSTS_SUCCESS:
    case GET_CATEGORY_POSTS_SUCCESS:
      return {
        ...addPosts(state, action.posts),
        isFetchingPosts: false
      }
    case GET_POSTS_FAILURE:
    case GET_CATEGORY_POSTS_FAILURE:
      return { ...state, isFetchingPosts: false }

    // manage single post
    case GET_POST_REQUEST:
      return { ...state, isFetchingPost: true }
    case GET_POST_SUCCESS:
      return {
        ...addPost(state, action.post),
        isFetchingPost: false
      }
    case GET_POST_FAILURE:
      return { ...state, isFetchingPost: false }
    case CREATE_POST_SUCCESS:
      return addPost(state, action.post)
    case VOTE_POST_SUCCESS:
      return updatePostScore(state, action.postId, action.value)
    case DELETE_POST_SUCCESS:
      return deletePost(state, action.postId)
    case GET_COMMENTS_SUCCESS:
      return updatePostComments(state, action.postId, action.comments)
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
    [post.id]: {
      ...post,
      commentIds: post.commentIds || []
    }
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

const updatePostComments = (state, postId, comments) => {
  const post = state.byId[postId]
  const commentIds = comments.map(comment => comment.id)

  return {
    ...state,
    byId : {
      ...state.byId,
      [postId]: {
        ...post,
        commentIds
      }
    }
  }
}

const deletePost = (state, postId) => {
  const oldById = state.byId
  const newById = Object.keys(oldById).reduce((obj, key) => {
    if (key !== postId) {
      return { ...obj, [key]: oldById[key] }
    }
    return obj
  }, {})

  return {
    ...state,
    byId: newById
  }
}

export default reducer
