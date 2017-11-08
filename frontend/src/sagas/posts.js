import { all, takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import * as api from 'utils/api'
import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  GET_CATEGORY_POSTS_REQUEST,
  GET_CATEGORY_POSTS_SUCCESS,
  GET_CATEGORY_POSTS_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE
} from 'actions/posts'

const getPosts = function*(action) {
  const response = yield call(api.getPosts)
  const result = yield response.json()

  if (result.error) {
    yield put({ type: GET_POSTS_FAILURE, error: result.error })
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
      yield put({ type: GET_CATEGORY_POSTS_FAILURE, error: result.error })
    } else {
      yield put({ type: GET_CATEGORY_POSTS_SUCCESS, posts: result, categoryId })
    }
  } catch(e) {
    yield put({ type: GET_CATEGORY_POSTS_FAILURE, error: e.message })
  }
}

const createPost = function*(action) {
  const { data, callbacks } = action

  try {
    const response = yield call(api.createPost, data)
    const result = yield response.json()

    if (result.error) {
      yield callbacks.reject({ error: result.error })
      yield put({ type: CREATE_POST_FAILURE, error: result.error })
    } else {
      yield callbacks.resolve({ response: result })
      yield put({ type: CREATE_POST_SUCCESS })
    }
  } catch(e) {
    yield callbacks.reject({ error: e.message })
    yield put({ type: CREATE_POST_FAILURE, error: e.message })
  }
}

function* postsSagas() {
  yield all([
    yield takeLatest(GET_POSTS_REQUEST, getPosts),
    yield takeLatest(GET_CATEGORY_POSTS_REQUEST, getCategoryPosts),
    yield takeEvery(CREATE_POST_REQUEST, createPost)
  ])
}

export default postsSagas
