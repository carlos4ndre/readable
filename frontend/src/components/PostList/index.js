import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import { CreateButton } from 'components/Button'
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

    const sortedPosts = this.sortPosts(posts, sortBy)
    return (
      <Container>
        {sortedPosts.length === 0 ?
          (
            <div>
              <NoPosts />
              <Grid padded>
                <Grid.Row centered>
                  <CreateButton size='massive' content='Create Post 🎉😸'/>
                </Grid.Row>
              </Grid>
            </div>
          )
        :
          (
            <div>
              <SortBy onChange={this.handleSortByChange}/>
              {sortedPosts.map((post, index) => (
                <Post key={index} index={index} {...post}/>
              ))}
              <CreateButton content='Create Post' floated='right' />
            </div>
          )
        }
      </Container>
    )
  }
}

export default PostList
