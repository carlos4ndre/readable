import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
  VOTE_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS
} from 'actions/comments'
import { UP_VOTE } from 'data/vote'

const initialState = {
  byId: {},
  allIds: [],
  isFetchingComments: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS_REQUEST:
      return { ...state, isFetchingComments: true }
    case GET_COMMENTS_SUCCESS:
      return {
        ...addComments(state, action.comments),
        isFetchingComments: false
      }
    case GET_COMMENTS_FAILURE:
      return { ...state, isFetchingComments: false }
    case VOTE_COMMENT_SUCCESS:
      return updateCommentScore(state, action.commentId, action.value)
    case DELETE_COMMENT_SUCCESS:
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
    [comment.id]: comment,
  },
  allIds: state.allIds.concat(comment.id)
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
