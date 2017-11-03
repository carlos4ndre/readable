export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILED = 'GET_POSTS_FAILED'
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS'
export const GET_CATEGORY_POSTS_SUCCESS = 'GET_CATEGORY_POSTS_SUCCESS'
export const GET_CATEGORY_POSTS_FAILED = 'GET_CATEGORY_POSTS_FAILED'

export const getPosts = () => ({
  type: GET_POSTS,
});

export const getCategoryPosts = (categoryId) => ({
  type: GET_CATEGORY_POSTS,
  categoryId
});
