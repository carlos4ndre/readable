import {
  getCategories,
  getPostsByCategoryId
} from 'selectors/categories'

import {
  getPosts,
  getPostById,
  getPostComments,
  isFetchingPosts,
  isFetchingPost
} from 'selectors/posts'

import {
  isFetchingComments
} from 'selectors/comments'

export {
  getCategories,
  getPosts,
  getPostById,
  getPostsByCategoryId,
  getPostComments,
  isFetchingPosts,
  isFetchingPost,
  isFetchingComments
}
