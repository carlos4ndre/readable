import {
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE
} from 'actionTypes'

export const getCategories = () => ({
  type: GET_CATEGORIES_REQUEST
})

export const getCategoriesSuccess = (categories) => ({
  type: GET_CATEGORIES_SUCCESS,
  categories
})

export const getCategoriesFailure = (error) => ({
  type: GET_CATEGORIES_SUCCESS,
  error
})
