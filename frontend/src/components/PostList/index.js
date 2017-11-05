import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import Post from 'components/Post'
import SortBy from 'components/SortBy'
import NoPosts from 'components/NoPosts'
import { TOP, LATEST } from 'data/sorting'

class PostList extends Component {
  state = {
    sortBy: LATEST
  }

  handleSortByChange = (value) => {
    this.setState({ sortBy: value })
  }

  sortPostsByLatest = (postA, postB) => (
     postB.timestamp - postA.timestamp
  )

  sortPostsByScore = (postA, postB) => (
     postB.voteScore - postA.voteScore
  )

  sortPosts = (posts, sortBy) => {
    const sorting = {
      [TOP]: this.sortPostsByScore,
      [LATEST]: this.sortPostsByLatest
    }

    return posts.sort(sorting[sortBy])
  }

  render() {
    const { posts } = this.props
    const { sortBy } = this.state

    if (posts.length === 0)
      return <NoPosts />

    const sortedPosts = this.sortPosts(posts, sortBy)
    return (
      <Container>
        <SortBy onChange={this.handleSortByChange}/>
        {sortedPosts.map((post, index) => (
          <Post key={index} index={index} {...post}/>
        ))}
      </Container>
    )
  }
}

export default PostList
