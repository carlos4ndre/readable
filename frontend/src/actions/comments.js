import {
  GET_COMMENTS_REQUEST,
  CREATE_COMMENT_REQUEST,
  VOTE_COMMENT_REQUEST,
  UPDATE_COMMENT_REQUEST,
  DELETE_COMMENT_REQUEST
} from 'actionTypes'

export const getComments = (postId) => ({
  type: GET_COMMENTS_REQUEST,
  postId
})

export const createComment = (comment, callbacks) => ({
  type: CREATE_COMMENT_REQUEST,
  comment,
  callbacks
})

export const voteComment = (commentId, value) => ({
  type: VOTE_COMMENT_REQUEST,
  commentId,
  value
})

export const updateComment = (comment, callbacks) => ({
  type: UPDATE_COMMENT_REQUEST,
  comment,
  callbacks
})

export const deleteComment = comment => ({
  type: DELETE_COMMENT_REQUEST,
  comment
})
