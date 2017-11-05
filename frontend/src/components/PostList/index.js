import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import { CreateButton } from 'components/Button'
import { CreatePostForm } from 'components/Forms'
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

  openCreatePostForm = () => this.setState({ showCreatePostForm: true })
  closeCreatePostForm = () => this.setState({ showCreatePostForm: false })

  render() {
    const { posts, categories } = this.props
    const { sortBy, showCreatePostForm } = this.state
    const sortedPosts = this.sortPosts(posts, sortBy)

    return (
      <Container>
        {sortedPosts.length === 0 ?
          (
            <div>
              <NoPosts />
              <Grid padded>
                <Grid.Row centered>
                  <CreateButton
                    content='Create Post 🎉😸'
                    size='massive'
                    onClick={this.openCreatePostForm}
                  />
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
              <CreateButton
                content='Create Post'
                floated='right'
                onClick={this.openCreatePostForm}
              />
            </div>
          )
        }

        <CreatePostForm
          open={showCreatePostForm}
          close={this.closeCreatePostForm.bind(this)}
          categories={categories}
        />
      </Container>
    )
  }
}

export default PostList
