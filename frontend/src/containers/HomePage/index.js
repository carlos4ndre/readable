import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPosts } from 'actions/posts'
import { Container, Grid } from 'semantic-ui-react'
import { CreatePostForm } from 'components/Forms'
import PostList from 'components/PostList'
import LoadingIcon from 'components/LoadingIcon'
import * as selectors from 'selectors'

class HomePage extends Component {
  componentWillMount() {
    this.props.getPosts()
  }

  render() {
    const { posts, categories, isFetchingPosts } = this.props
    const hasPosts = posts.length !== 0

    return (
      <Container>
        {isFetchingPosts ?
          <LoadingIcon />
        :
          <Grid>
            <Grid.Row>
              <PostList posts={posts} categories={categories}/>
            </Grid.Row>
            <Grid.Row centered>
              <CreatePostForm primary={hasPosts} categories={categories} />
            </Grid.Row>
          </Grid>
        }
      </Container>
    )
  }
}

HomePage.PropTypes = {
  posts: PropTypes.array.required,
  categories: PropTypes.array.required,
  isFetching: PropTypes.bool.required
}

const mapStateToProps = (state) => ({
  posts: selectors.getPosts(state),
  categories: selectors.getCategories(state),
  isFetchingPosts: selectors.isFetchingPosts(state)
})

const mapDispatchToProps = (dispatch) => ({
  getPosts: (data) => dispatch(getPosts(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage)
