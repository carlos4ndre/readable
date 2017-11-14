import { createSelector } from 'reselect'
import { posts } from 'selectors/posts'

export const categories = state => state.categories
export const categoryId = (state, id) => id

export const getCategories = createSelector(
  [ categories ],
  (categories) => Object.values(categories.byId)
)

export const getCategory = createSelector(
  [ categories, categoryId ],
  (categories, id) => categories.byId[id]
)

export const getCategoryPosts = createSelector(
  [ getCategory, posts ],
  (category, posts) => {
    if (category && category.postIds) {
      return category.postIds.map(id => posts.byId[id])
    }
    return []
  }
)
