import * as actions from 'actions'
import * as types from 'actionTypes'
import * as data from 'data/tests'

describe('actions', () => {
  const postId = data.post.id
  const comment = data.comment
  const commentId = comment.id
  const comments = [ comment ]
  const callbacks = {
    resolve: () => 'good stuff',
    reject: () => 'ups, an error'
  }
  const error = 'something bad happened!'

  it('should create an action to get comments [REQUEST]', () => {
    const expectedAction = {
      type: types.GET_COMMENTS_REQUEST,
    }
    expect(actions.getComments()).toEqual(expectedAction)
  })

  it('should create an action to get comments [SUCCESS]', () => {
    const expectedAction = {
      type: types.GET_COMMENTS_SUCCESS,
      postId,
      comments
    }
    expect(actions.getCommentsSuccess(postId, comments)).toEqual(expectedAction)
  })

  it('should create an action to get comments [FAILURE]', () => {
    const expectedAction = {
      type: types.GET_COMMENTS_FAILURE,
      error
    }
    expect(actions.getCommentsFailure(error)).toEqual(expectedAction)
  })

  it('should create an action to create a comment [REQUEST]', () => {
    const expectedAction = {
      type: types.CREATE_COMMENT_REQUEST,
      comment,
      callbacks
    }

    expect(actions.createComment(comment, callbacks)).toEqual(expectedAction)
  })

  it('should create an action to create a comment [SUCCESS]', () => {
    const expectedAction = {
      type: types.CREATE_COMMENT_SUCCESS,
      comment
    }

    expect(actions.createCommentSuccess(comment)).toEqual(expectedAction)
  })

  it('should create an action to create a comment [FAILURE]', () => {
    const expectedAction = {
      type: types.CREATE_COMMENT_FAILURE,
      error
    }

    expect(actions.createCommentFailure(error)).toEqual(expectedAction)
  })

  it('should create an action to vote a comment [REQUEST]', () => {
    const value = 1
    const expectedAction = {
      type: types.VOTE_COMMENT_REQUEST,
      commentId: commentId,
      value
    }

    expect(actions.voteComment(commentId, value)).toEqual(expectedAction)
  })

it('should create an action to vote a comment [SUCCESS]', () => {
    const value = 1
    const expectedAction = {
      type: types.VOTE_COMMENT_SUCCESS,
      commentId,
      value
    }

    expect(actions.voteCommentSuccess(commentId, value)).toEqual(expectedAction)
  })

  it('should create an action to vote a comment [FAILURE]', () => {
    const value = 1
    const expectedAction = {
      type: types.VOTE_COMMENT_FAILURE,
      error
    }

    expect(actions.voteCommentFailure(error)).toEqual(expectedAction)
  })

  it('should create an action to update a comment [REQUEST]', () => {
    const expectedAction = {
      type: types.UPDATE_COMMENT_REQUEST,
      comment,
      callbacks
    }

    expect(actions.updateComment(comment, callbacks)).toEqual(expectedAction)
  })

  it('should create an action to update a comment [SUCCESS]', () => {
    const expectedAction = {
      type: types.UPDATE_COMMENT_SUCCESS,
      comment
    }

    expect(actions.updateCommentSuccess(comment)).toEqual(expectedAction)
  })

  it('should create an action to update a comment [FAILURE]', () => {
    const expectedAction = {
      type: types.UPDATE_COMMENT_FAILURE,
      error
    }

    expect(actions.updateCommentFailure(error)).toEqual(expectedAction)
  })


  it('should create an action to delete a comment [REQUEST]', () => {
    const expectedAction = {
      type: types.DELETE_COMMENT_REQUEST,
      comment
    }

    expect(actions.deleteComment(comment)).toEqual(expectedAction)
  })

  it('should create an action to delete a comment [SUCCESS]', () => {
    const expectedAction = {
      type: types.DELETE_COMMENT_SUCCESS,
      comment
    }

    expect(actions.deleteCommentSuccess(comment)).toEqual(expectedAction)
  })

  it('should create an action to delete a comment [FAILURE]', () => {
    const expectedAction = {
      type: types.DELETE_COMMENT_FAILURE,
      error
    }

    expect(actions.deleteCommentFailure(error)).toEqual(expectedAction)
  })
})
