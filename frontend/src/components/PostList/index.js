import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'semantic-ui-react'
import Post from 'components/Post'
import SortBy from 'components/SortBy'
import NoPosts from 'components/NoPosts'
import { TOP, LATEST } from 'data/sorting'

class PostList extends Component {
  state = {
    sortBy: LATEST,
    showCreatePostForm: false
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
    const sortedPosts = this.sortPosts(posts, sortBy)

    return (
      <Container>
        {sortedPosts.length === 0 ?
          <NoPosts />
        :
          <div>
            <SortBy onChange={this.handleSortByChange}/>
            {sortedPosts.map((post, index) => (
              <Post key={index} index={index} {...post}/>
            ))}
          </div>
        }
      </Container>
    )
  }
}

PostList.PropTypes = {
  posts: PropTypes.array.required
}

export default PostList
