import { all, takeLatest, call, put } from 'redux-saga/effects';
import * as api from 'utils/api'
import {
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILED,
} from 'actions/categories'

const getCategories = function*(action) {
  const response = yield call(api.getCategories)
  const result = yield response.json();

  if (result.error) {
    yield put({ type: GET_CATEGORIES_FAILED, error: result.error });
  } else {
    yield put({ type: GET_CATEGORIES_SUCCESS, categories: result.categories });
  }
}

function* categoriesSagas() {
  yield all([
    yield takeLatest(GET_CATEGORIES, getCategories),
  ])
}

export default categoriesSagas
