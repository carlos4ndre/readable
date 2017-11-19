import React from 'react'
import { mountWithStore } from 'utils/tests'
import { Grid, List, Label } from 'semantic-ui-react'
import PostItem from 'components/PostItem'
import ScorePanel from 'components/ScorePanel'
import StyledLink from 'components/StyledLink'

describe('<PostItem />', () => {
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
  const index = 10
  let container

  beforeEach(() => {
    container = mountWithStore(<PostItem index={index} {...post}/>)
  })

  afterEach(() => {
    container.unmount()
  })

  it('should render the post number', () => {
    const column = container.find(Grid.Column).at(0)
    expect(column.prop('children')).toEqual(index + 1)
  })

  it('should render a score panel', () => {
    const column = container.find(Grid.Column).at(1)
    expect(column.find(ScorePanel)).toHaveLength(1)
  })

  it('should render a link to the post page', () => {
    const column = container.find(Grid.Column).at(2)
    const item = column.find(List.Item).at(0)
    const link = item.find(StyledLink)
    const expectedLinkUrl = `/${post.category}/${post.id}`
    const expectedLinkName = post.title

    expect(link.prop('to')).toEqual(expectedLinkUrl)
    expect(link.prop('children')).toEqual(expectedLinkName)
  })

  it('should render the posted date and author', () => {
    const column = container.find(Grid.Column).at(2)
    const item = column.find(List.Item).at(1)
    expect(item.text()).toEqual('Posted on 19/11/2017 by Mr. Robot')
  })

  it('should render the total number of comments', () => {
    const column = container.find(Grid.Column).at(2)
    const item = column.find(List.Item).at(2)
    expect(item.text()).toEqual('20 comments')
  })
})
