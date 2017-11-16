import React from 'react'
import sinon from 'sinon'
import { Feed } from 'semantic-ui-react'
import { mountWithStore } from 'utils/tests'
import Comment from 'components/Comment'
import CommentList from 'components/CommentList'

describe('<CommentList />', () => {
  const comments = [
    {
      id: 1,
      parendId: 1000,
      timestamp: 1510788064,
      body: 'trust me, this is great comment!',
      author: 'gandalf',
      voteScore: 10
    },
    {
      id: 2,
      parendId: 2000,
      timestamp: 1510788080,
      body: 'this is great comment, I promise!',
      author: 'gandalf',
      voteScore: -10
    },
    {
      id: 3,
      parendId: 3000,
      timestamp: 1510788090,
      body: 'The ultimate comment!',
      author: 'gandalf',
      voteScore: 100
    }
  ]
  const voteComment = sinon.spy()
  const deleteComment = sinon.spy()
  let container

  beforeEach(() => {
    container = mountWithStore(
      <CommentList
        comments={comments}
        voteComment={voteComment}
        deleteComment={deleteComment}
      />
    )
  })

  afterEach(() => {
    container.unmount()
  })

  it('should render a list of comments sorted by score', () => {
    const sortedComments = container.find(Comment)

    expect(sortedComments).toHaveLength(3)
    expect(sortedComments.at(0).prop('comment').id).toEqual(3)
    expect(sortedComments.at(1).prop('comment').id).toEqual(1)
    expect(sortedComments.at(2).prop('comment').id).toEqual(2)
  })

  it('should pass the right props to each comment', () => {
    const sortedComments = container.find(Comment)
    const comment = sortedComments.find(Comment).at(0)

    expect(comment.prop('voteComment')).toBeDefined()
    expect(comment.prop('deleteComment')).toBeDefined()
    expect(comment.prop('comment')).toEqual(comments[0])
  })
})
