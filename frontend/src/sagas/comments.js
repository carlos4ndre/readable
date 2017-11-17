import { all, takeLatest, call, put } from 'redux-saga/effects'
import * as api from 'utils/api'
import * as actions from 'actions'

const getComments = function*(action) {
  try {
    const postId = action.postId
    const response = yield call(api.getComments, postId)
    const result = yield response.json()
    const error = result.error

    if (error) {
      yield put(actions.getCommentsFailure(error))
    } else {
      yield put(actions.getCommentsSuccess(postId, result))
    }
  } catch(e) {
    yield put(actions.getCommentsFailure(e.message))
  }
}

const createComment = function*(action) {
  const { comment, callbacks } = action

  try {
    const response = yield call(api.createComment, comment)
    const result = yield response.json()
    let error = result.error

    if (error) {
      yield callbacks.reject({ error })
      yield put(actions.createCommentFailure(error))
    } else {
      yield callbacks.resolve()
      yield put(actions.createCommentSuccess(comment))
    }
  } catch(e) {
    let error = e.message
    yield callbacks.reject({ error })
    yield put(actions.createCommentFailure(error))
  }
}

const voteComment = function*(action) {
  try {
    const { commentId, value } = action
    const response = yield call(api.voteComment, commentId, value)
    const result = yield response.json()
    const error = result.error

    if (error) {
      yield put(actions.voteCommentFailure(error))
    } else {
      yield put(actions.voteCommentSuccess(commentId, value))
    }
  } catch(e) {
    yield put(actions.voteCommentFailure(e.message))
  }
}

const updateComment = function*(action) {
  const { comment, callbacks } = action

  try {
    const response = yield call(api.updateComment, comment)
    const result = yield response.json()
    const error = result.error

    if (error) {
      yield callbacks.reject({ error })
      yield put(actions.updateCommentFailure(error))
    } else {
      yield callbacks.resolve()
      yield put(actions.updateCommentSuccess(comment))
    }
  } catch(e) {
    let error = e.message
    yield callbacks.reject({ error })
    yield put(actions.updateCommentFailure(error))
  }
}

const deleteComment = function*(action) {
  try {
    const comment = action.comment
    const response = yield call(api.deleteComment, comment.id)
    const result = yield response.json()
    const error = result.error

    if (error) {
      yield put(actions.deleteCommentFailure(error))
    } else {
      yield put(actions.deleteCommentSuccess(comment))
    }
  } catch(e) {
    yield put(actions.deleteCommentFailure(e.message))
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
