export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

export const GET_POST_REQUEST = 'GET_POST_REQUEST'
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
export const GET_POST_FAILURE = 'GET_POST_FAILURE'

export const GET_CATEGORY_POSTS_REQUEST = 'GET_CATEGORY_POSTS_REQUEST'
export const GET_CATEGORY_POSTS_SUCCESS = 'GET_CATEGORY_POSTS_SUCCESS'
export const GET_CATEGORY_POSTS_FAILURE = 'GET_CATEGORY_POSTS_FAILURE'

export const CREATE_POST_REQUEST = 'CREATE_POST_REQUEST'
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS'
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE'

export const VOTE_POST_REQUEST = 'VOTE_POST_REQUEST'
export const VOTE_POST_SUCCESS = 'VOTE_POST_SUCCESS'
export const VOTE_POST_FAILURE = 'VOTE_POST_FAILURE'

export const getPosts = () => ({
  type: GET_POSTS_REQUEST
})

export const getPost = (postId) => ({
  type: GET_POST_REQUEST,
  postId
})

export const getCategoryPosts = (categoryId) => ({
  type: GET_CATEGORY_POSTS_REQUEST,
  categoryId
})

export const createPost = (data, callbacks) => ({
  type: CREATE_POST_REQUEST,
  data,
  callbacks
})

export const votePost = (postId, value) => ({
  type: VOTE_POST_REQUEST,
  postId,
  value
})
