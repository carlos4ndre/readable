import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPosts } from 'actions/posts'
import PostList from 'components/PostList'
import SortBy from 'components/SortBy'

class HomePage extends Component {
  componentWillMount() {
    this.props.dispatch(getPosts())
  }

  render() {
    const { posts } = this.props

    return (
      <div>
        <SortBy />
        <PostList posts={posts}/>
      </div>
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
