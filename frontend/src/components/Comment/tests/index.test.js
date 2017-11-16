import React from 'react'
import sinon from 'sinon'
import { Feed, Icon, Label } from 'semantic-ui-react'
import { mountWithStore } from 'utils/tests'
import { EditCommentForm, DeleteCommentForm } from 'components/Forms'
import Comment from 'components/Comment'

describe('<Comment />', () => {
  const comment = {
    id: 1,
    parendId: 1000,
    timestamp: 1510788064,
    body: 'trust me, this is great comment!',
    author: 'gandalf',
    voteScore: 5
  }
  const badComment = {
    ...comment,
    voteScore: -5
  }
  const voteComment = sinon.spy()
  let container

  beforeEach(() => {
    container = mountWithStore(
      <Comment
        comment={comment}
        voteComment={voteComment}
      />
    )
  })

  afterEach(() => {
    container.unmount()
  })

  it('should render the comment author and posted date', () => {
    const summary = container.find(Feed.Summary)
    expect(summary).toHaveLength(1)
  })

  it('should render the comment body', () => {
    const extra = container.find(Feed.Extra)

    expect(extra).toHaveLength(1)
    expect(extra.find('Text').prop('value')).toEqual(comment.body)
  })

  it('should change the comment score when positive', () => {
    const meta = container.find(Feed.Meta)
    const scoreLabel = meta.find(Label)

    expect(scoreLabel.prop('color')).toEqual('green')
    expect(scoreLabel.prop('icon')).toEqual('star')
    expect(scoreLabel.prop('content')).toEqual(comment.voteScore)
  })

  it('should change the comment score when negative', () => {
    // FIXME: setProps() + update() not working for mount
    // https://github.com/airbnb/enzyme/issues/1229
    // forcing rerender with new instance for now!
    container = mountWithStore(
      <Comment
        comment={badComment}
        voteComment={voteComment}
      />
    )
    const meta = container.find(Feed.Meta)
    const scoreLabel = meta.find(Label)

    expect(scoreLabel.prop('color')).toEqual('red')
    expect(scoreLabel.prop('icon')).toEqual('star')
    expect(scoreLabel.prop('content')).toEqual(badComment.voteScore)
  })

  it('should render an edit and delete links', () => {
    const meta = container.find(Feed.Meta)
    expect(meta.find(EditCommentForm)).toHaveLength(1)
    expect(meta.find(DeleteCommentForm)).toHaveLength(1)
  })

  it('should handle up/down voteComment events', () => {
    const meta = container.find(Feed.Meta)

    const upVoteButton = meta.find(Icon).at(1)
    upVoteButton.simulate('click')
    expect(voteComment.calledWith(comment.id, 'upVote')).toEqual(true)

    const downVoteButton = meta.find(Icon).at(2)
    downVoteButton.simulate('click')
    expect(voteComment.calledWith(comment.id, 'downVote')).toEqual(true)

    expect(voteComment.calledTwice).toEqual(true)
  })
})
