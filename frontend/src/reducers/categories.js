import * as types from 'actionTypes'

const initialState = {
  byId: {},
  allIds: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CATEGORIES_SUCCESS:
      return addCategories(state, action.categories)
    case types.GET_CATEGORY_POSTS_SUCCESS:
      return addCategoryPostIds(state, action.categoryId, action.posts)
    case types.CREATE_POST_SUCCESS:
      return addCategoryPostId(state, action.post.category, action.post.id)
    case types.DELETE_POST_SUCCESS:
      return deleteCategoryPostIds(state, action.post)
    default:
      return state
  }
}

const addCategories = (state, categories) => (
  categories.reduce((obj, category) => ({
    ...obj,
    byId: {
      ...obj.byId,
      [category.name]: {
        ...category,
        postIds: state.postIds || []
      }
    },
    allIds: obj.allIds.concat(category.name)
  }), state)
)

const addCategoryPostIds = (state, categoryId, posts) => {
  const category = state.byId[categoryId]
  const postIds = posts.map(post => post.id)

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

const addCategoryPostId = (state, categoryId, postId) => {
  const category = state.byId[categoryId]

  return {
    ...state,
    byId: {
      ...state.byId,
      [categoryId]: {
        ...category,
        postIds: category.postIds.concat(postId)
      }
    }
  }
}

const deleteCategoryPostIds = (state, post) => {
  const postId = post.id
  const categoryId = post.category
  const category = state.byId[categoryId]
  const updatedPostIds = category.postIds.filter(id => id !== postId)

  return {
    ...state,
    byId: {
      ...state.byId,
      [categoryId]: {
        ...category,
        postIds: updatedPostIds
      }
    }
  }
}

export default reducer
