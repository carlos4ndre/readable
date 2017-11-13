import { all, takeLatest, call, put } from 'redux-saga/effects'
import * as api from 'utils/api'
import {
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE
} from 'actionTypes'

const getCategories = function*(action) {
  try {
    const response = yield call(api.getCategories)
    const result = yield response.json()

    if (result.error) {
      yield put({ type: GET_CATEGORIES_FAILURE, error: result.error })
    } else {
      yield put({ type: GET_CATEGORIES_SUCCESS, categories: result.categories })
    }
  } catch(e) {
    yield put({ type: GET_CATEGORIES_FAILURE, error: e.message })
  }
}

function* categoriesSagas() {
  yield all([
    yield takeLatest(GET_CATEGORIES_REQUEST, getCategories)
  ])
}

export default categoriesSagas
