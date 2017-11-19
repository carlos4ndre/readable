import React from 'react'
import sinon from 'sinon'
import { Grid, Header, Segment, Statistic } from 'semantic-ui-react'
import { mountWithStore } from 'utils/tests'
import PostProfile from 'components/PostProfile'
import ScorePanel from 'components/ScorePanel'
import StyledLink from 'components/StyledLink'
import CommentList from 'components/CommentList'
import { EditPostForm, DeletePostForm, CreateCommentForm } from 'components/Forms'

describe('<PostProfile />', () => {
  const post = {
    id: 'f2972514-6d01-45fe-a76c-c5b544766b89',
    timestamp: 1467166872634,
    title: 'Buckethead Tour',
    body: 'Buckethead is back with great style!',
    author: 'Mr. Robot',
    category: 'music',
    voteScore: 100,
    commentCount: 20
  }
  const comment = {
    id: 1,
    parendId: 1000,
    timestamp: 1510788064,
    body: 'trust me, this is great comment!',
    author: 'gandalf',
    voteScore: 10
  }
  const getComments = sinon.spy()
  const initialState = {
    posts: {
      byId: {
        [post.id]: post
      },
      allIds: [post.id],
      isFetchingPosts: false
    },
    comments: {
      byId: {
        [comment.id]: comment
      },
      allIds: [comment.id],
      isFetchingComments: false
    }
  }
  let container

  beforeEach(() => {
    container = mountWithStore(
      <PostProfile post={post} getComments={getComments}/>
    , initialState)
  })

  afterEach(() => {
    container.unmount()
  })

  it('should render a title', () => {
    const infoBox = container.find(Grid.Row).at(0)
    const title = infoBox.find(Header)
    expect(title).toHaveLength(1)
    expect(title.text()).toEqual(post.title)
  })

  it('should render a box with post info', () => {
    const infoBox = container.find(Grid.Row).at(0)
    expect(infoBox.find(Segment.Group)).toHaveLength(2)
  })

  it('should render a link on the left hand side', () => {
    const infoBox = container.find(Grid.Row).at(0)
    const topSection = infoBox.find(Segment.Group).at(0)
    const leftColumn = topSection.find(Grid.Column).at(0)
    const link = leftColumn.find(StyledLink)

    expect(link).toHaveLength(1)
    expect(link.prop('hoverhighlight')).toEqual('false')
    expect(link.prop('to')).toEqual(`/${post.category}`)
  })

  it('should render the body on the center', () => {
    const infoBox = container.find(Grid.Row).at(0)
    const topSection = infoBox.find(Segment.Group).at(0)
    const centerColumn = topSection.find(Grid.Column).at(1)
    const body = centerColumn.find('Text')

    expect(body).toHaveLength(1)
    expect(body.text()).toEqual(post.body)
  })

  it('should render a score panel on the right hand side', () => {
    const infoBox = container.find(Grid.Row).at(0)
    const topSection = infoBox.find(Segment.Group).at(0)
    const rightColumn = topSection.find(Grid.Column).at(2)
    expect(rightColumn.find(ScorePanel)).toHaveLength(1)
  })

  it('should render the post date and author', () => {
    const infoBox = container.find(Grid.Row).at(0)
    const bottomSection = infoBox.find(Segment.Group).at(1)
    const text = bottomSection.find('span').text()

    expect(text).toEqual('Posted on 19/11/2017 by Mr. Robot')
  })


  it('should render an edit and delete buttons', () => {
    const infoBox = container.find(Grid.Row).at(0)
    const bottomSection = infoBox.find(Segment.Group).at(1)

    expect(bottomSection.find(EditPostForm)).toHaveLength(1)
    expect(bottomSection.find(DeletePostForm)).toHaveLength(1)
  })

  it('should render comments statistic', () => {
    const statsSection = container.find(Grid.Row).at(1)
    const stats = statsSection.find(Statistic)
    const commentsStat = stats.at(0)

    expect(commentsStat.prop('label')).toEqual('Comments')
    expect(commentsStat.prop('value')).toEqual(post.commentCount)
    expect(commentsStat.prop('color')).toEqual('blue')
  })

  it('should render score statistic', () => {
    const statsSection = container.find(Grid.Row).at(1)
    const stats = statsSection.find(Statistic)
    const commentsStat = stats.at(1)

    expect(commentsStat.prop('label')).toEqual('Score')
    expect(commentsStat.prop('value')).toEqual(post.voteScore)
    expect(commentsStat.prop('color')).toEqual('green')
  })

  it('should render a list of comments', () => {
    const commentsSection = container.find(Grid.Row).at(2)
    expect(commentsSection.find(CommentList)).toHaveLength(1)
  })

  it('should render a form to create comments', () => {
    const feedbackSection = container.find(Grid.Row).at(3)
    expect(feedbackSection.find(CreateCommentForm)).toHaveLength(1)
  })
})
