import { Map } from 'immutable'
import { GET_CATEGORIES_SUCCESS } from 'actions/categories'
import { GET_CATEGORY_POSTS_SUCCESS } from 'actions/posts'

const initialState = Map({})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return categoriesMap(state, action)
    case GET_CATEGORY_POSTS_SUCCESS:
      return updateCategoryPosts(state, action)
    default:
      return state
  }
}

const categoriesMap = (state, action) => (
  Map(action.categories.map(
    category => [category.name, category]
  ))
)

const updateCategoryPosts = (state, action) => {
  const categoryId = action.categoryId
  const postIds = action.posts.map(post => post.id)
  const oldCategory = state.get(categoryId)
  const updatedCategory = Object.assign({ postIds }, oldCategory)

  return state.set(categoryId, updatedCategory)
}

export default reducer
