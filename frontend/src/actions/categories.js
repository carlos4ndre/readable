import * as types from 'actionTypes'

export const getCategories = () => ({
  type: types.GET_CATEGORIES_REQUEST
})

export const getCategoriesSuccess = (categories) => ({
  type: types.GET_CATEGORIES_SUCCESS,
  categories
})

export const getCategoriesFailure = (error) => ({
  type: types.GET_CATEGORIES_FAILURE,
  error
})
