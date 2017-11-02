import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Divider } from 'semantic-ui-react'
import { getCategories } from 'actions/categories'
import { getPosts } from 'actions/posts'
import Header from 'components/Header'
import PostList from 'components/PostList'
import SortBy from 'components/SortBy'

class HomePage extends Component {
  componentWillMount() {
    this.props.dispatch(getCategories())
    this.props.dispatch(getPosts())
  }

  render() {
    const { categories, posts } = this.props

    return (
      <div>
        <Header categories={categories}/>
        <Divider hidden/>
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
  const categories = state.categories
  const posts = state.posts
  console.log(state)

  return {
    categories,
    posts,
  }
}

export default connect(mapStateToProps)(HomePage)
