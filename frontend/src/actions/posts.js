import * as types from 'actionTypes'

export const getPosts = () => ({
  type: types.GET_POSTS_REQUEST
})

export const getPostsSuccess = (posts) => ({
  type: types.GET_POSTS_SUCCESS,
  posts
})

export const getPostsFailure = (error) => ({
  type: types.GET_POST_FAILURE,
  error
})

export const getPost = (postId) => ({
  type: types.GET_POST_REQUEST,
  postId
})

export const getPostSuccess = (post) => ({
  type: types.GET_POST_SUCCESS,
  post
})

export const getPostFailure = (error) => ({
  type: types.GET_POST_FAILURE,
  error
})

export const getCategoryPosts = (categoryId) => ({
  type: types.GET_CATEGORY_POSTS_REQUEST,
  categoryId
})

export const getCategoryPostsSuccess = (posts, categoryId) => ({
  type: types.GET_CATEGORY_POSTS_SUCCESS,
  categortyId,
  posts
})

export const getCategoryPostsFailure = (error) => ({
  type: types.GET_CATEGORY_POSTS_FAILURE,
  error
})

export const createPost = (post, callbacks) => ({
  type: types.CREATE_POST_REQUEST,
  post,
  callbacks
})

export const createPostSuccess = (post) => ({
  type: types.CREATE_POST_SUCCESS,
  post
})

export const createPostFailure = (error) => ({
  type: types.CREATE_POST_FAILURE,
  error
})

export const votePost = (postId, value) => ({
  type: types.VOTE_POST_REQUEST,
  postId,
  value
})

export const votePostSucess = (postId, value) => ({
  type: types.VOTE_POST_SUCCESS,
  postId,
  value
})

export const votePostFailure = (error) => ({
  type: types.VOTE_POST_FAILURE,
  error
})

export const updatePost = (post, callbacks) => ({
  type: types.UPDATE_POST_REQUEST,
  post,
  callbacks
})

export const updatePostSuccess = (post) => ({
  type: types.UPDATE_POST_SUCCESS,
  post
})

export const updatePostFailure = (error) => ({
  type: types.UPDATE_POST_FAILURE,
  error
})

export const deletePost = (post) => ({
  type: types.DELETE_POST_REQUEST,
  post
})

export const deletePostSuccess = (post) => ({
  type: types.DELETE_POST_SUCCESS,
  post
})

export const deletePostFailure = (error) => ({
  type: types.DELETE_POST_FAILURE,
  error
})
