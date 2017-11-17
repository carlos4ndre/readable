import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
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

export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  posts
})

export const getPostsFailure = (error) => ({
  type: GET_POST_FAILURE,
  error
})

export const getPost = (postId) => ({
  type: GET_POST_REQUEST,
  postId
})

export const getPostSuccess = (post) => ({
  type: GET_POST_SUCCESS,
  post
})

export const getPostFailure = (error) => ({
  type: GET_POST_FAILURE,
  error
})

export const getCategoryPosts = (categoryId) => ({
  type: GET_CATEGORY_POSTS_REQUEST,
  categoryId
})

export const getCategoryPostsSuccess = (posts, categoryId) => ({
  type: GET_CATEGORY_POSTS_SUCCESS,
  categortyId,
  posts
})

export const getCategoryPostsFailure = (error) => ({
  type: GET_CATEGORY_POSTS_FAILURE,
  error
})

export const createPost = (post, callbacks) => ({
  type: CREATE_POST_REQUEST,
  post,
  callbacks
})

export const createPostSuccess = (post) => ({
  type: CREATE_POST_SUCCESS,
  post
})

export const createPostFailure = (error) => ({
  type: CREATE_POST_FAILURE,
  error
})

export const votePost = (postId, value) => ({
  type: VOTE_POST_REQUEST,
  postId,
  value
})

export const votePostSucess = (postId, value) => ({
  type: VOTE_POST_SUCCESS,
  postId,
  value
})

export const votePostFailure = (error) => ({
  type: VOTE_POST_FAILURE,
  error
})

export const updatePost = (post, callbacks) => ({
  type: UPDATE_POST_REQUEST,
  post,
  callbacks
})

export const updatePostSuccess = (post) => ({
  type: UPDATE_POST_SUCCESS,
  post
})

export const updatePostFailure = (error) => ({
  type: UPDATE_POST_FAILURE,
  error
})

export const deletePost = (post) => ({
  type: DELETE_POST_REQUEST,
  post
})

export const deletePostSuccess = (post) => ({
  type: DELETE_POST_SUCCESS,
  post
})

export const deletePostFailure = (error) => ({
  type: DELETE_POST_FAILURE,
  error
})
