import _ from 'lodash'
import * as types from 'actionTypes'
import { UP_VOTE } from 'utils/vote'

const initialState = {
  byId: {},
  allIds: [],
  isFetchingComments: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COMMENTS_REQUEST:
      return { ...state, isFetchingComments: true }
    case types.GET_COMMENTS_SUCCESS:
      return {
        ...addComments(state, action.comments),
        isFetchingComments: false
      }
    case types.GET_COMMENTS_FAILURE:
      return { ...state, isFetchingComments: false }
    case types.CREATE_COMMENT_SUCCESS:
      return addComment(state, action.comment)
    case types.VOTE_COMMENT_SUCCESS:
      return updateCommentScore(state, action.commentId, action.value)
    case types.UPDATE_COMMENT_SUCCESS:
      return updateComment(state, action.comment)
    case types.DELETE_COMMENT_SUCCESS:
      return deleteComment(state, action.comment)
    default:
      return state
  }
}

const addComments = (state, comments = []) => (
  comments.reduce((obj, comment) => addComment(obj, comment), state)
)

const addComment = (state, comment) => ({
  ...state,
  byId: {
    ...state.byId,
    [comment.id]: comment
  },
  allIds: _.uniq(state.allIds.concat(comment.id))
})

const updateCommentScore = (state, commentId, value) => {
  const comment = state.byId[commentId]
  const points = value === UP_VOTE ? 1 : -1

  return {
    ...state,
    byId :{
      ...state.byId,
      [commentId]: {
        ...comment,
        voteScore: comment.voteScore + points
      }
    }
  }
}

const updateComment = (state, comment) => ({
  ...state,
  byId :{
    ...state.byId,
    [comment.id]: {
      ...comment
    }
  }
})

const deleteComment = (state, comment) => {
  const commentId = comment.id
  const oldById = state.byId
  const newById = Object.keys(oldById).reduce((obj, key) => {
    if (key !== commentId) {
      return { ...obj, [key]: oldById[key] }
    }
    return obj
  }, {})

  return {
    ...state,
    byId: newById,
    allIds: state.allIds.filter(id => id !== commentId)
  }
}

export default reducer
