import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPosts } from 'actions/posts'
import PostList from 'components/PostList'

class HomePage extends Component {
  componentWillMount() {
    this.props.dispatch(getPosts())
  }

  render() {
    const { posts } = this.props

    return (
      <PostList posts={posts}/>
    )
  }
}

HomePage.PropTypes = {
  dispatch: PropTypes.func,
}

const mapStateToProps = (state) => {
  const posts = state.posts

  return {
    posts,
  }
}

export default connect(mapStateToProps)(HomePage)
