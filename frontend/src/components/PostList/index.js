import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'semantic-ui-react'
import { TOP, LATEST } from 'data/sorting'
import { sortByScore, sortByTimestamp } from 'utils/sorting'
import PostItem from 'components/PostItem'
import SortBy from 'components/SortBy'
import NoPosts from 'components/NoPosts'

class PostList extends Component {
  state = {
    sortBy: TOP,
    showCreatePostForm: false
  }

  handleSortByChange = (value) => {
    this.setState({ sortBy: value })
  }

  sortPosts = (posts, sortBy) => {
    const sorting = {
      [TOP]: sortByScore,
      [LATEST]: sortByTimestamp
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
              <PostItem key={index} index={index} {...post}/>
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
