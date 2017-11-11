import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE
} from 'actions/comments'

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
