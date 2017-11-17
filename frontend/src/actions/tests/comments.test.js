import * as actions from 'actions'
import * as types from 'actionTypes'

describe('actions', () => {
  const comment = {
    id: 1,
    parendId: 1000,
    timestamp: 1510788064,
    body: 'trust me, this is great comment!',
    author: 'gandalf',
    voteScore: 5
  }
  const callbacks = {
    resolve: () => 'good stuff',
    reject: () => 'ups, an error'
  }

  it('should create an action to get comments', () => {
    const expectedAction = {
      type: types.GET_COMMENTS_REQUEST,
    }
    expect(actions.getComments()).toEqual(expectedAction)
  })

  it('should create an action to create a comment', () => {
    const expectedAction = {
      type: types.CREATE_COMMENT_REQUEST,
      comment,
      callbacks
    }

    expect(actions.createComment(comment, callbacks)).toEqual(expectedAction)
  })

  it('should create an action to vote a comment', () => {
    const value = 1
    const expectedAction = {
      type: types.VOTE_COMMENT_REQUEST,
      commentId: comment.id,
      value
    }

    expect(actions.voteComment(comment.id, value)).toEqual(expectedAction)
  })

  it('should create an action to update a comment', () => {
    const expectedAction = {
      type: types.UPDATE_COMMENT_REQUEST,
      comment,
      callbacks
    }

    expect(actions.updateComment(comment, callbacks)).toEqual(expectedAction)
  })

  it('should create an action to delete a comment', () => {
    const expectedAction = {
      type: types.DELETE_COMMENT_REQUEST,
      comment
    }

    expect(actions.deleteComment(comment)).toEqual(expectedAction)
  })
})
