import { all, takeLatest, takeEvery, call, put } from 'redux-saga/effects'
import * as api from 'utils/api'
import * as actions from 'actions'
import * as types from 'actionTypes'

const getPosts = function*(action) {
  const response = yield call(api.getPosts)
  const result = yield response.json()
  const error = result.error

  if (error) {
    yield put(actions.getPostsFailure(error))
  } else {
    yield put(actions.getPostsSuccess(result))
  }
}

const getPost = function*(action) {
  try {
    const postId = action.postId
    const response = yield call(api.getPost, postId)
    const result = yield response.json()
    const error = result.error

    if (error) {
      yield put(actions.getPostFailure(error))
    }
    else if (!result.id) {
      yield put(actions.getPostFailure('Post was deleted'))
    } else {
      yield put(actions.getPostSuccess(result))
    }
  } catch(e) {
    yield put(actions.getPostFailure(e.message))
  }
}

const getCategoryPosts = function*(action) {
  try {
    const categoryId = action.categoryId
    const response = yield call(api.getCategoryPosts, categoryId)
    const result = yield response.json()
    const error = result.error

    if (error) {
      yield put(actions.getCategoryPostsFailure(error))
    } else {
      yield put(actions.getCategoryPostsSuccess(categoryId, result))
    }
  } catch(e) {
    yield put(actions.getCategoryPostsFailure(e.message))
  }
}

const createPost = function*(action) {
  const { post, callbacks } = action

  try {
    const response = yield call(api.createPost, post)
    const result = yield response.json()
    let error = result.error

    if (error) {
      yield callbacks.reject({ error })
      yield put(actions.createPostFailure(error))
    } else {
      yield callbacks.resolve()
      yield put(actions.createPostSuccess(post))
    }
  } catch(e) {
    let error = e.message
    yield callbacks.reject({ error })
    yield put(actions.createPostFailure(error))
  }
}

const votePost = function*(action) {
  try {
    const { postId, value } = action
    const response = yield call(api.votePost, postId, value)
    const result = yield response.json()
    const error = result.error

    if (error) {
      yield put(actions.votePostFailure(error))
    } else {
      yield put(actions.votePostSuccess(postId, value))
    }
  } catch(e) {
    yield put(actions.votePostFailure(e.message))
  }
}

const updatePost = function*(action) {
  const { post, callbacks } = action

  try {
    const response = yield call(api.updatePost, post)
    const result = yield response.json()
    let error = result.error

    if (error) {
      yield callbacks.reject({ error })
      yield put(actions.updatePostFailure(error))
    } else {
      yield callbacks.resolve()
      yield put(actions.updatePostSuccess(post))
    }
  } catch(e) {
    let error = e.message
    yield callbacks.reject({ error })
    yield put(actions.updatePostFailure(error))
  }
}

const deletePost = function*(action) {
  try {
    const post = action.post
    const response = yield call(api.deletePost, post.id)
    const result = yield response.json()
    const error = result.error

    if (error) {
      yield put(actions.deletePostFailure(error))
    } else {
      yield put(actions.deletePostSuccess(post))
    }
  } catch(e) {
    yield put(actions.deletePostFailure(e.message))
  }
}

function* postsSagas() {
  yield all([
    yield takeLatest(types.GET_POSTS_REQUEST, getPosts),
    yield takeLatest(types.GET_POST_REQUEST, getPost),
    yield takeLatest(types.GET_CATEGORY_POSTS_REQUEST, getCategoryPosts),
    yield takeEvery(types.CREATE_POST_REQUEST, createPost),
    yield takeEvery(types.VOTE_POST_REQUEST, votePost),
    yield takeEvery(types.UPDATE_POST_REQUEST, updatePost),
    yield takeEvery(types.DELETE_POST_REQUEST, deletePost)
  ])
}

export default postsSagas
