import reducer from 'reducers'
import * as actions from 'actions'
import * as data from 'data/tests'

describe('categories reducer', () => {
  const initialState = data.initialState
  const postId = data.post.id
  const post = data.post
  const commentId = data.comment.id
  const comment = data.comment
  const comments = [ comment ]

  const stateWithoutComment = {
    ...initialState,
    posts: {
      ...initialState.posts,
      byId: {
        [postId]: {
          ...post,
          commentCount: 0,
          commentIds: []
        }
      }
    }
  }

  const stateFetchingComment = {
    ...stateWithoutComment,
    comments: {
      ...stateWithoutComment.comments,
      isFetchingComments: true
    }
  }

  const stateWithComment = (comment) => ({
    ...initialState,
    posts: {
      ...initialState.posts,
      byId: {
        [postId]: {
          ...post,
          commentCount: 1,
          commentIds: [comment.id]
        }
      }
    },
    comments: {
      ...initialState.comments,
      allIds: [comment.id],
      byId: {
        [comment.id]: comment
      }
    }
  })

  it('should handle GET_COMMENTS_REQUEST', () => {
    const action = actions.getComments()
    const state = stateWithoutComment
    const nextState = stateFetchingComment

    expect(reducer(state, action)).toEqual(nextState)
  })

  it('should handle GET_COMMENTS_FAILURE', () => {
    const action = actions.getCommentsFailure()
    const state = stateFetchingComment
    const nextState = stateWithoutComment

    expect(reducer(state, action)).toEqual(nextState)
  })

  it('should handle GET_COMMENTS_SUCCESS', () => {
    const action = actions.getCommentsSuccess(postId, comments)
    const state = stateFetchingComment
    const nextState = stateWithComment(comment)

    // dummy data has an hardcoded commentCount of 0,
    // which should have been updated by the server when
    // fetching existing posts, so we ignore this value
    // for this test
    nextState.posts.byId[postId].commentCount = 0

    expect(reducer(state, action)).toEqual(nextState)
  })

  it('should handle CREATE_COMMENT_SUCCESS', () => {
    const action = actions.createCommentSuccess(comment)
    const state = stateWithoutComment
    const nextState = stateWithComment(comment)

    expect(reducer(state, action)).toEqual(nextState)
  })

  it('should handle VOTE_COMMENT_SUCCESS when upVote', () => {
    const voteScore = comment.voteScore + 1
    const commentVoted = { ...comment, voteScore }

    const action = actions.voteCommentSuccess(commentId, 'upVote')
    const state = stateWithComment(comment)
    const nextState = stateWithComment(commentVoted)

    expect(reducer(state, action)).toEqual(nextState)
  })

  it('should handle VOTE_COMMENT_SUCCESS when downVote', () => {
    const voteScore = comment.voteScore - 1
    const commentVoted = { ...comment, voteScore }

    const action = actions.voteCommentSuccess(commentId, 'downVote')
    const state = stateWithComment(comment)
    const nextState = stateWithComment(commentVoted)

    expect(reducer(state, action)).toEqual(nextState)
  })

  it('should handle UPDATE_COMMENT_SUCCESS', () => {
    const updatedComment = {
      ...comment,
      title: 'test',
      body: 'testing rulez!'
    }

    const action = actions.updateCommentSuccess(updatedComment)
    const state = stateWithComment(comment)
    const nextState = stateWithComment(updatedComment)

    expect(reducer(state, action)).toEqual(nextState)
  })

  it('should handle DELETE_COMMENT_SUCCESS', () => {
    const action = actions.deleteCommentSuccess(comment)
    const state = stateWithComment(comment)
    const nextState = stateWithoutComment

    expect(reducer(state, action)).toEqual(nextState)
  })
})
