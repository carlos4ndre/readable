import {
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE
} from 'actions/comments'

const initialState = {
  byId: {},
  allIds: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS_SUCCESS:
      return addComments(state, action.comments)
    case GET_COMMENTS_FAILURE:
      return state
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

export default reducer
