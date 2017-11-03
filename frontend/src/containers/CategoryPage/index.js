import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCategoryPosts } from 'actions/posts'
import PostList from 'components/PostList'

class CategoryPage extends Component {
  componentWillMount() {
    this.props.dispatch(getCategoryPosts())
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

const mapStateToProps = (state) => {
  const posts = state.posts

  return {
    posts,
  }
}

export default connect(mapStateToProps)(CategoryPage)
