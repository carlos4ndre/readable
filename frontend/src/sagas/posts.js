import { all, takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import * as api from 'utils/api'
import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
  GET_CATEGORY_POSTS,
  GET_CATEGORY_POSTS_SUCCESS,
  GET_CATEGORY_POSTS_FAILED,
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILED
} from 'actions/posts'

const getPosts = function*(action) {
  const response = yield call(api.getPosts)
  const result = yield response.json()

  if (result.error) {
    yield put({ type: GET_POSTS_FAILED, error: result.error })
  } else {
    yield put({ type: GET_POSTS_SUCCESS, posts: result })
  }
}

const getCategoryPosts = function*(action) {
  try {
    const categoryId = action.categoryId
    const response = yield call(api.getCategoryPosts, categoryId)
    const result = yield response.json()

    if (result.error) {
      yield put({ type: GET_CATEGORY_POSTS_FAILED, error: result.error })
    } else {
      yield put({ type: GET_CATEGORY_POSTS_SUCCESS, posts: result, categoryId })
    }
  } catch(e) {
    yield put({ type: GET_CATEGORY_POSTS_FAILED, error: e.message })
  }
}

const createPost = function*(action) {
  try {
    const response = yield call(api.createPost, ...action.data.data)
    const result = yield response.json()

    if (result.error) {
      yield put({ type: CREATE_POST_FAILED, error: result.error })
    } else {
      yield put({ type: CREATE_POST_SUCCESS })
    }
  } catch(e) {
    yield put({ type: CREATE_POST_FAILED, error: e.message })
  }
}

function* postsSagas() {
  yield all([
    yield takeLatest(GET_POSTS, getPosts),
    yield takeLatest(GET_CATEGORY_POSTS, getCategoryPosts),
    yield takeEvery(CREATE_POST, createPost)
  ])
}

export default postsSagas
