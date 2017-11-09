export const getPosts = state => Object.values(state.posts.byId)
export const getPostById = (state, postId) => state.posts.byId[postId]
export const isFetchingPosts = state => state.posts.isFetchingPosts
export const isFetchingPost = state => state.posts.isFetchingPost
