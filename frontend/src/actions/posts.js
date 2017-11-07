export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

export const GET_CATEGORY_POSTS_REQUEST = 'GET_CATEGORY_POSTS_REQUEST'
export const GET_CATEGORY_POSTS_SUCCESS = 'GET_CATEGORY_POSTS_SUCCESS'
export const GET_CATEGORY_POSTS_FAILURE = 'GET_CATEGORY_POSTS_FAILURE'

export const CREATE_POST_REQUEST = 'CREATE_POST_REQUEST'
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS'
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE'

export const getPosts = () => ({
  type: GET_POSTS_REQUEST
})

export const getCategoryPosts = (categoryId) => ({
  type: GET_CATEGORY_POSTS_REQUEST,
  categoryId
})

export const createPost = (data) => ({
  type: CREATE_POST_REQUEST,
  data
})
