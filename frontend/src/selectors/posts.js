import { createSelector } from 'reselect'
import { comments } from 'selectors/comments'

export const posts = (state) => state.posts
export const postId = (state, id) => id
export const isFetchingPosts = (state) => state.posts.isFetchingPosts
export const isFetchingPost = (state) => state.posts.isFetchingPost

export const getPosts = createSelector(
  [ posts ],
  (posts) => Object.values(posts.byId)
)

export const getPost = createSelector(
  [ posts, postId ],
  (posts, id) => posts.byId[id]
)

export const getPostComments = createSelector(
  [ getPost, comments ],
  (post, comments) => {
    if (post && post.commentIds) {
      return post.commentIds.map(id => comments.byId[id])
    }
    return []
  }
)

export const getCategoryPosts = createSelector(
  [ getPost, posts ],
  (post, categories) => {
    if (post && post.commentIds) {
      return post.commentIds.map(id => comments.byId[id])
    }
    return []
  }
)
