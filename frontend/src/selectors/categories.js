export const getCategories = state => Object.values(state.categories.byId)

export const getPostsByCategoryId = (state, categoryId) => {
  const category = state.categories.byId[categoryId]
  const postIds = category && category.postIds ? category.postIds : []
  const categoryPosts = postIds.map(postId => state.posts.byId[postId])

  return categoryPosts
}
