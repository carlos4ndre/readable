import { all, takeLatest, takeEvery, call, put } from 'redux-saga/effects'
import * as api from 'utils/api'
import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  GET_CATEGORY_POSTS_REQUEST,
  GET_CATEGORY_POSTS_SUCCESS,
  GET_CATEGORY_POSTS_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  VOTE_POST_REQUEST,
  VOTE_POST_SUCCESS,
  VOTE_POST_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE
} from 'actionTypes'

const getPosts = function*(action) {
  const response = yield call(api.getPosts)
  const result = yield response.json()

  if (result.error) {
    yield put({ type: GET_POSTS_FAILURE, error: result.error })
  } else {
    yield put({ type: GET_POSTS_SUCCESS, posts: result })
  }
}

const getPost = function*(action) {
  try {
    const postId = action.postId
    const response = yield call(api.getPost, postId)
    const result = yield response.json()

    if (result.error) {
      yield put({ type: GET_POST_FAILURE, error: result.error })
    } else {
      yield put({ type: GET_POST_SUCCESS, post: result })
    }
  } catch(e) {
    yield put({ type: GET_POST_FAILURE, error: e.message })
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
  const { post, callbacks } = action

  try {
    const response = yield call(api.createPost, post)
    const result = yield response.json()

    if (result.error) {
      yield callbacks.reject({ error: result.error })
    } else {
      yield callbacks.resolve()
      yield put({ type: CREATE_POST_SUCCESS, post })
    }
  } catch(e) {
    yield callbacks.reject({ error: e.message })
  }
}

const votePost = function*(action) {
  try {
    const { postId, value } = action
    const response = yield call(api.votePost, postId, value)
    const result = yield response.json()

    if (result.error) {
      yield put({ type: VOTE_POST_FAILURE, error: result.error })
    } else {
      yield put({ type: VOTE_POST_SUCCESS, postId, value })
    }
  } catch(e) {
    yield put({ type: VOTE_POST_FAILURE, error: e.message })
  }
}

const updatePost = function*(action) {
  const { post, callbacks } = action

  try {
    const response = yield call(api.updatePost, post)
    const result = yield response.json()

    if (result.error) {
      yield callbacks.reject({ error: result.error })
    } else {
      yield callbacks.resolve()
      yield put({ type: UPDATE_POST_SUCCESS, post })
    }
  } catch(e) {
    yield callbacks.reject({ error: e.message })
  }
}

const deletePost = function*(action) {
  try {
    const post = action.post
    const response = yield call(api.deletePost, post.id)
    const result = yield response.json()

    if (result.error) {
      yield put({ type: DELETE_POST_FAILURE, error: result.error })
    } else {
      yield put({ type: DELETE_POST_SUCCESS, post })
    }
  } catch(e) {
    yield put({ type: DELETE_POST_FAILURE, error: e.message })
  }
}

function* postsSagas() {
  yield all([
    yield takeLatest(GET_POSTS_REQUEST, getPosts),
    yield takeLatest(GET_POST_REQUEST, getPost),
    yield takeLatest(GET_CATEGORY_POSTS_REQUEST, getCategoryPosts),
    yield takeEvery(CREATE_POST_REQUEST, createPost),
    yield takeEvery(VOTE_POST_REQUEST, votePost),
    yield takeEvery(UPDATE_POST_REQUEST, updatePost),
    yield takeEvery(DELETE_POST_REQUEST, deletePost)
  ])
}

export default postsSagas
