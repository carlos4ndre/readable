export const GET_COMMENTS_REQUEST = 'GET_COMMENTS_REQUEST'
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS'
export const GET_COMMENTS_FAILURE = 'GET_COMMENTS_FAILURE'

export const CREATE_COMMENT_REQUEST = 'CREATE_COMMENT_REQUEST'
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS'
export const CREATE_COMMENT_FAILURE = 'CREATE_COMMENT_FAILURE'

export const VOTE_COMMENT_REQUEST = 'VOTE_COMMENT_REQUEST'
export const VOTE_COMMENT_SUCCESS = 'VOTE_COMMENT_SUCCESS'
export const VOTE_COMMENT_FAILURE = 'VOTE_COMMENT_FAILURE'

export const UPDATE_COMMENT_REQUEST = 'UPDATE_COMMENT_REQUEST'
export const UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS'
export const UPDATE_COMMENT_FAILURE = 'UPDATE_COMMENT_FAILURE'

export const DELETE_COMMENT_REQUEST = 'DELETE_COMMENT_REQUEST'
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS'
export const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE'

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
