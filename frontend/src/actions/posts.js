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

export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST'
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS'
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE'

export const VOTE_POST_REQUEST = 'VOTE_POST_REQUEST'
export const VOTE_POST_SUCCESS = 'VOTE_POST_SUCCESS'
export const VOTE_POST_FAILURE = 'VOTE_POST_FAILURE'

export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST'
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE'

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
  callbacks,
  post
})

export const deletePost = post => ({
  type: DELETE_POST_REQUEST,
  post
})
