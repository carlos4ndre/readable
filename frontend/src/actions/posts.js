import {
  GET_POSTS_REQUEST,
  GET_POST_REQUEST,
  GET_CATEGORY_POSTS_REQUEST,
  CREATE_POST_REQUEST,
  VOTE_POST_REQUEST,
  UPDATE_POST_REQUEST,
  DELETE_POST_REQUEST
} from 'actionTypes'

export const getPosts = () => ({
  type: GET_POSTS_REQUEST
})

export const getPost = postId => ({
  type: GET_POST_REQUEST,
  postId
})

export const getCategoryPosts = categoryId => ({
  type: GET_CATEGORY_POSTS_REQUEST,
  categoryId
})

export const createPost = (post, callbacks) => ({
  type: CREATE_POST_REQUEST,
  post,
  callbacks
})

export const votePost = (postId, value) => ({
  type: VOTE_POST_REQUEST,
  postId,
  value
})

export const updatePost = (post, callbacks) => ({
  type: UPDATE_POST_REQUEST,
  post,
  callbacks
})

export const deletePost = post => ({
  type: DELETE_POST_REQUEST,
  post
})
