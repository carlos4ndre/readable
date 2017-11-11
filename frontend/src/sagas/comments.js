import { all, takeLatest, call, put } from 'redux-saga/effects';
import * as api from 'utils/api'
import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
  VOTE_COMMENT_REQUEST,
  VOTE_COMMENT_SUCCESS,
  VOTE_COMMENT_FAILURE
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

function* commentsSagas() {
  yield all([
    yield takeLatest(GET_COMMENTS_REQUEST, getComments),
    yield takeLatest(VOTE_COMMENT_REQUEST, voteComment),
  ])
}

export default commentsSagas
