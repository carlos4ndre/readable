import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Grid } from 'semantic-ui-react'
import * as selectors from 'selectors'
import { getCategoryPosts } from 'actions'
import { CreatePostForm } from 'components/Forms'
import { CreateButton } from 'components/Button'
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
    const { categories, categoryPosts, isFetchingPosts } = this.props
    const hasPosts = categoryPosts.length !== 0

    return (
      <Container>
        {isFetchingPosts ?
          <LoadingIcon />
        :
          <Grid>
            <Grid.Row>
              <PostList posts={categoryPosts}/>
            </Grid.Row>
            <Grid.Row centered>
              <CreatePostForm categories={categories}>
                <CreateButton
                  content={hasPosts ? 'Create Post' : 'Be the first! 🎉💈🔮✨'}
                  size={hasPosts ? 'medium' : 'massive'}
                />
              </CreatePostForm>
            </Grid.Row>
          </Grid>
        }
      </Container>
    )
  }
}

CategoryPage.PropTypes = {
  categories: PropTypes.array.required,
  categoryPosts: PropTypes.array.required,
  isFetchingPosts: PropTypes.bool.required
}

const mapStateToProps = (originalState, originalOwnProps) => {
  return (state, ownProps) => {
    const categoryId = ownProps.match.params.categoryId

    return {
      categories: selectors.getCategories(state),
      categoryPosts: selectors.getCategoryPosts(state, categoryId),
      isFetchingPosts: selectors.isFetchingPosts(state)
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCategoryPosts: (data) => dispatch(getCategoryPosts(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryPage)
