import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPosts } from 'actions/posts'
import { Container } from 'semantic-ui-react'
import PostList from 'components/PostList'
import LoadingIcon from 'components/LoadingIcon'

class HomePage extends Component {
  componentWillMount() {
    this.props.getPosts()
  }

  render() {
    const { posts, categories, isFetchingPosts } = this.props

    return (
      <Container>
        {isFetchingPosts ? <LoadingIcon /> : <PostList posts={posts} categories={categories}/>}
      </Container>
    )
  }
}

HomePage.PropTypes = {
  dispatch: PropTypes.func,
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
