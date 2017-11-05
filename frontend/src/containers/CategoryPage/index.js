import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCategoryPosts } from 'actions/posts'
import { Container } from 'semantic-ui-react'
import PostList from 'components/PostList'
import LoadingIcon from 'components/LoadingIcon'

class CategoryPage extends Component {
  state = {
    selectedCategory: null
  }

  componentWillMount() {
    const { getCategoryPosts, match } = this.props
    const categoryId = match.params.categoryId

    this.setState({ selectedCategory: categoryId })
    getCategoryPosts(categoryId)
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
    const { categoryPosts, isFetchingPosts } = this.props

    return (
      <Container>
        {isFetchingPosts ? <LoadingIcon /> : <PostList posts={categoryPosts}/>}
      </Container>
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
  const isFetchingPosts = posts.isFetching

  return { categoryPosts, isFetchingPosts }
}

const mapDispatchToProps = (dispatch) => ({
  getCategoryPosts: (data) => dispatch(getCategoryPosts(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryPage)
