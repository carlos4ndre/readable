import { all, takeLatest, call, put } from 'redux-saga/effects';
import * as api from 'utils/api'
import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
} from 'actions/comments'

const getComments = function*(action) {
  try {
    const postId = action.postId
    const response = yield call(api.getComments, postId)
    const result = yield response.json()

    if (result.error) {
      yield put({ type: GET_COMMENTS_FAILURE, error: result.error })
    } else {
      yield put({ type: GET_COMMENTS_SUCCESS, comments: result, postId })
    }
  } catch(e) {
    yield put({ type: GET_COMMENTS_FAILURE, error: e.message })
  }
}

function* commentsSagas() {
  yield all([
    yield takeLatest(GET_COMMENTS_REQUEST, getComments),
  ])
}

export default commentsSagas
