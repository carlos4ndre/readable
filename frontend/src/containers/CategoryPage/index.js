import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCategoryPosts } from 'actions/posts'
import PostList from 'components/PostList'

class CategoryPage extends Component {
  componentWillMount() {
    const { getCategoryPosts, match } = this.props
    getCategoryPosts(match.params.categoryId)
  }

  render() {
    const { posts } = this.props

    return (
      <PostList posts={posts}/>
    )
  }
}

CategoryPage.PropTypes = {
  dispatch: PropTypes.func,
}

const mapStateToProps = (state) => ({
  posts: state.posts.toArray(),
})

const mapDispatchToProps = (dispatch) => ({
  getCategoryPosts: (data) => dispatch(getCategoryPosts(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryPage)
