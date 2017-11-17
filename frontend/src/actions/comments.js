import * as types from 'actionTypes'

export const getComments = (postId) => ({
  type: types.GET_COMMENTS_REQUEST,
  postId
})

export const getCommentsSuccess = (postId, comments) => ({
  type: types.GET_COMMENTS_SUCCESS,
  postId,
  comments
})

export const getCommentsFailure = (error) => ({
  type: types.GET_COMMENTS_FAILURE,
  error
})

export const createComment = (comment, callbacks) => ({
  type: types.CREATE_COMMENT_REQUEST,
  comment,
  callbacks
})

export const createCommentSuccess = (comment) => ({
  type: types.CREATE_COMMENT_SUCCESS,
  comment
})

export const createCommentFailure = (error) => ({
  type: types.CREATE_COMMENT_FAILURE,
  error
})

export const voteComment = (commentId, value) => ({
  type: types.VOTE_COMMENT_REQUEST,
  commentId,
  value
})

export const voteCommentSuccess = (commentId, value) => ({
  type: types.VOTE_COMMENT_SUCCESS,
  commentId,
  value
})

export const voteCommentFailure = (error) => ({
  type: types.VOTE_COMMENT_FAILURE,
  error
})

export const updateComment = (comment, callbacks) => ({
  type: types.UPDATE_COMMENT_REQUEST,
  comment,
  callbacks
})

export const updateCommentSuccess = (comment) => ({
  type: types.UPDATE_COMMENT_SUCCESS,
  comment
})

export const updateCommentFailure = (error) => ({
  type: types.UPDATE_COMMENT_FAILURE,
  error
})

export const deleteComment = (comment) => ({
  type: types.DELETE_COMMENT_REQUEST,
  comment
})

export const deleteCommentSuccess = (comment) => ({
  type: types.DELETE_COMMENT_SUCCESS,
  comment
})

export const deleteCommentFailure = (error) => ({
  type: types.DELETE_COMMENT_FAILURE,
  error
})
