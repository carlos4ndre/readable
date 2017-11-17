import { all, takeLatest, call, put } from 'redux-saga/effects'
import * as api from 'utils/api'
import * as actions from 'actions'
import * as types from 'actionTypes'

const getCategories = function*(action) {
  try {
    const response = yield call(api.getCategories)
    const result = yield response.json()

    if (result.error) {
      yield put(actions.getCategoriesFailure(result.error))
    } else {
      yield put(actions.getCategoriesSuccess(result.categories))
    }
  } catch(e) {
    yield put(actions.getCategoriesFailure(e.message))
  }
}

function* categoriesSagas() {
  yield all([
    yield takeLatest(types.GET_CATEGORIES_REQUEST, getCategories)
  ])
}

export default categoriesSagas
