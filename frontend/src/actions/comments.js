export const GET_COMMENTS_REQUEST = 'GET_COMMENTS_REQUEST'
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS'
export const GET_COMMENTS_FAILURE = 'GET_COMMENTS_FAILURE'

export const VOTE_COMMENT_REQUEST = 'VOTE_COMMENT_REQUEST'
export const VOTE_COMMENT_SUCCESS = 'VOTE_COMMENT_SUCCESS'
export const VOTE_COMMENT_FAILURE = 'VOTE_COMMENT_FAILURE'

export const DELETE_COMMENT_REQUEST = 'DELETE_COMMENT_REQUEST'
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS'
export const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE'

export const getComments = (postId) => ({
  type: GET_COMMENTS_REQUEST,
  postId
})

export const voteComment = (commentId, value) => ({
  type: VOTE_COMMENT_REQUEST,
  commentId,
  value
})

export const deleteComment = comment => ({
  type: DELETE_COMMENT_REQUEST,
  comment
})
