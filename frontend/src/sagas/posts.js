import { all, takeLatest, call, put } from 'redux-saga/effects';
import * as api from 'utils/api'
import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
  GET_CATEGORY_POSTS,
  GET_CATEGORY_POSTS_SUCCESS,
  GET_CATEGORY_POSTS_FAILED,
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

const getCategoryPosts = function*(action) {
  try {
    const categoryId = action.categoryId
    const response = yield call(api.getCategoryPosts, categoryId)
    const result = yield response.json();

    if (result.error) {
      yield put({ type: GET_CATEGORY_POSTS_FAILED, error: result.error });
    } else {
      yield put({ type: GET_CATEGORY_POSTS_SUCCESS, posts: result, categoryId });
    }
  } catch(e) {
    yield put({ type: GET_CATEGORY_POSTS_FAILED, error: e.message });
  }
}

function* postsSagas() {
  yield all([
    yield takeLatest(GET_POSTS, getPosts),
    yield takeLatest(GET_CATEGORY_POSTS, getCategoryPosts),
  ])
}

export default postsSagas
