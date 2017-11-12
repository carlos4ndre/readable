import { all, takeLatest, call, put } from 'redux-saga/effects'
import * as api from 'utils/api'
import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  VOTE_COMMENT_REQUEST,
  VOTE_COMMENT_SUCCESS,
  VOTE_COMMENT_FAILURE,
  UPDATE_COMMENT_REQUEST,
  UPDATE_COMMENT_SUCCESS,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE
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

const createComment = function*(action) {
  const { comment, callbacks } = action

  try {
    const response = yield call(api.createComment, comment)
    const result = yield response.json()

    if (result.error) {
      yield callbacks.reject({ error: result.error })
    } else {
      yield callbacks.resolve()
      yield put({ type: CREATE_COMMENT_SUCCESS, comment })
    }
  } catch(e) {
    yield callbacks.reject({ error: e.message })
  }
}

const voteComment = function*(action) {
  try {
    const { commentId, value } = action
    const response = yield call(api.voteComment, commentId, value)
    const result = yield response.json()

    if (result.error) {
      yield put({ type: VOTE_COMMENT_FAILURE, error: result.error })
    } else {
      yield put({ type: VOTE_COMMENT_SUCCESS, commentId, value })
    }
  } catch(e) {
    yield put({ type: VOTE_COMMENT_FAILURE, error: e.message })
  }
}

const updateComment = function*(action) {
  const { comment, callbacks } = action

  try {
    const response = yield call(api.updateComment, comment)
    const result = yield response.json()

    if (result.error) {
      yield callbacks.reject({ error: result.error })
    } else {
      yield callbacks.resolve()
      yield put({ type: UPDATE_COMMENT_SUCCESS, comment })
    }
  } catch(e) {
    yield callbacks.reject({ error: e.message })
  }
}

const deleteComment = function*(action) {
  try {
    const comment = action.comment
    const response = yield call(api.deleteComment, comment.id)
    const result = yield response.json()

    if (result.error) {
      yield put({ type: DELETE_COMMENT_FAILURE, error: result.error })
    } else {
      yield put({ type: DELETE_COMMENT_SUCCESS, comment })
    }
  } catch(e) {
    yield put({ type: DELETE_COMMENT_FAILURE, error: e.message })
  }
}

function* commentsSagas() {
  yield all([
    yield takeLatest(GET_COMMENTS_REQUEST, getComments),
    yield takeLatest(CREATE_COMMENT_REQUEST, createComment),
    yield takeLatest(VOTE_COMMENT_REQUEST, voteComment),
    yield takeLatest(UPDATE_COMMENT_REQUEST, updateComment),
    yield takeLatest(DELETE_COMMENT_REQUEST, deleteComment)
  ])
}

export default commentsSagas
