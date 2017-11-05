import { GET_CATEGORIES_SUCCESS } from 'actions/categories'
import { GET_CATEGORY_POSTS_SUCCESS } from 'actions/posts'

const initialState = {
  byId: {},
  allIds: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return addCategories(state, action)
    case GET_CATEGORY_POSTS_SUCCESS:
      return updateCategoryPosts(state, action)
    default:
      return state
  }
}

const addCategories = (state, action) => (
  action.categories.reduce((obj, category) => ({
    ...obj,
    byId: {
      ...obj.byId,
      [category.name]: category
    },
    allIds: obj.allIds.concat(category.name)
  }), state)
)

const updateCategoryPosts = (state, action) => {
  const categoryId = action.categoryId
  const category = state.byId[categoryId]
  const postIds = action.posts.map(post => post.id)

  return {
    ...state,
    byId: {
      ...state.byId,
      [categoryId]: {
        ...category,
        postIds
      }
    },
    allIds: state.allIds.concat(categoryId)
  }
}

export default reducer
