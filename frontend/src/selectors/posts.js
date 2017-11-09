export const getPosts = state => Object.values(state.posts.byId)
export const getPostById = (state, postId) => state.posts.byId[postId]
export const getPostComments = (state, postId) => {
  const post = getPostById(state, postId)
  if (post && post.commentIds) {
    return post.commentIds.map(id => state.comments.byId[id])
  }
  return []
}
export const isFetchingPosts = state => state.posts.isFetchingPosts
export const isFetchingPost = state => state.posts.isFetchingPost
