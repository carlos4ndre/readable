import { takeLatest, call, put } from 'redux-saga/effects';
import * as CategoriesAPI from 'utils/CategoriesAPI'
import {
  GET_CATEGORIES_REQUESTED,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILED,
} from 'actions/categories'

const getCategories = function*(action) {
  const response = yield call(CategoriesAPI.getAll)
  const result = yield response.json();

  if (result.error) {
    yield put({ type: GET_CATEGORIES_FAILED, error: result.error });
  } else {
    yield put({ type: GET_CATEGORIES_SUCCESS, categories: result.categories });
  }
}

const rootSaga = function*() {
  yield takeLatest(GET_CATEGORIES_REQUESTED, getCategories)
}

export default rootSaga
