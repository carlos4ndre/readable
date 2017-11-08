export const getPosts = state => Object.values(state.posts.byId)
export const isFetchingPosts = state => state.posts.isFetching
