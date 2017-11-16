import React from 'react'
import { mountWithStore } from 'utils/tests'
import PostList from 'components/PostList'
import PostItem from 'components/PostItem'
import SortBy from 'components/SortBy'

describe('<PostList />', () => {
  const posts = [
    {
      id: 1,
      title: 'Super post!',
      body: 'Yes, this is a super post',
      timestamp: 1510788064,
      author: 'gandalf',
      commentCount: 0,
      voteScore: 10
    },
    {
      id: 2,
      title: '10.000 days',
      body: 'This post is over 9000',
      timestamp: 1510788080,
      author: 'gandalf',
      commentCount: 8,
      voteScore: 100
    },
    {
      id: 3,
      timestamp: 1510788090,
      title: 'black hole',
      body: 'draining score from all multiverse',
      author: 'gandalf',
      commentCount: 100,
      voteScore: -50
    }
  ]
  let container

  beforeEach(() => {
    container = mountWithStore(<PostList posts={posts}/>)
  })

  afterEach(() => {
    container.unmount()
  })

  it('should render a list of posts sorted by score', () => {
    const selectOption = container.find(SortBy).find('span').at(0)
    selectOption.simulate('click')

    const sortedPosts = container.find(PostItem)
    expect(sortedPosts).toHaveLength(3)
    expect(sortedPosts.at(0).prop('id')).toEqual(2)
    expect(sortedPosts.at(1).prop('id')).toEqual(1)
    expect(sortedPosts.at(2).prop('id')).toEqual(3)
  })

  it('should render a list of posts sorted by latest', () => {
    const selectOption = container.find(SortBy).find('span').at(1)
    selectOption.simulate('click')

    const sortedPosts = container.find(PostItem)
    expect(sortedPosts).toHaveLength(3)
    expect(sortedPosts.at(0).prop('id')).toEqual(3)
    expect(sortedPosts.at(1).prop('id')).toEqual(2)
    expect(sortedPosts.at(2).prop('id')).toEqual(1)
  })

  it('should render a list of posts sorted by comments', () => {
    const selectOption = container.find(SortBy).find('span').at(2)
    selectOption.simulate('click')

    const sortedPosts = container.find(PostItem)
    expect(sortedPosts).toHaveLength(3)
    expect(sortedPosts.at(0).prop('id')).toEqual(3)
    expect(sortedPosts.at(1).prop('id')).toEqual(2)
    expect(sortedPosts.at(2).prop('id')).toEqual(1)
  })
})
