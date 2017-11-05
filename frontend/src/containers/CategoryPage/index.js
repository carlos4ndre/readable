import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCategoryPosts } from 'actions/posts'
import PostList from 'components/PostList'

class CategoryPage extends Component {
  state = {
    selectedCategory: null
  }

  componentWillReceiveProps(nextProps) {
    const { getCategoryPosts, match } = nextProps
    const { selectedCategory } = this.state
    const categoryId = match.params.categoryId

    if (categoryId !== selectedCategory) {
      this.setState({ selectedCategory: categoryId })
      getCategoryPosts(categoryId)
    }
  }

  render() {
    const { categoryPosts } = this.props

    return (
      <PostList posts={categoryPosts}/>
    )
  }
}

CategoryPage.PropTypes = {
  dispatch: PropTypes.func,
}

const mapStateToProps = (state, props) => {
  const { posts, categories } = state

  const categoryId = props.match.params.categoryId
  const category = categories.byId[categoryId]
  const postIds = category && category.postIds ? category.postIds : []
  const categoryPosts = postIds.map(postId => posts.byId[postId])

  return { categoryPosts }
}

const mapDispatchToProps = (dispatch) => ({
  getCategoryPosts: (data) => dispatch(getCategoryPosts(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryPage)
