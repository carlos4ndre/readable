import { all, takeLatest, call, put } from 'redux-saga/effects';
import * as api from 'utils/api'
import {
  GET_POSTS_REQUESTED,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
} from 'actions/posts'

const getPosts = function*(action) {
  const response = yield call(api.getPosts)
  const result = yield response.json();

  if (result.error) {
    yield put({ type: GET_POSTS_FAILED, error: result.error });
  } else {
    yield put({ type: GET_POSTS_SUCCESS, posts: result });
  }
}

function* postsSagas() {
  yield all([
    yield takeLatest(GET_POSTS_REQUESTED, getPosts)
  ])
}

export default postsSagas
