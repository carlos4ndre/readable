export const GET_COMMENTS_REQUEST = 'GET_COMMENTS_REQUEST'
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS'
export const GET_COMMENTS_FAILURE = 'GET_COMMENTS_FAILURE'

export const getComments = (postId) => ({
  type: GET_COMMENTS_REQUEST,
  postId
})
