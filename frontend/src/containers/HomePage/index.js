import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPosts } from 'actions/posts'
import { Container, Grid } from 'semantic-ui-react'
import { CreatePostForm } from 'components/Forms'
import PostList from 'components/PostList'
import LoadingIcon from 'components/LoadingIcon'

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
  posts: Object.values(state.posts.byId),
  categories: Object.values(state.categories.byId),
  isFetchingPosts: state.posts.isFetching,
})

const mapDispatchToProps = (dispatch) => ({
  getPosts: (data) => dispatch(getPosts(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage)
