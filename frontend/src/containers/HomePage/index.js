import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Grid } from 'semantic-ui-react'
import * as selectors from 'selectors'
import { getPosts } from 'actions/posts'
import { CreatePostForm } from 'components/Forms'
import { CreateButton } from 'components/Button'
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

HomePage.PropTypes = {
  posts: PropTypes.array.required,
  categories: PropTypes.array.required,
  isFetching: PropTypes.bool.required
}

const mapStateToProps = (originalState, originalOwnProps) => {
  return (state, ownProps) => {
    return {
      posts: selectors.getPosts(state),
      categories: selectors.getCategories(state),
      isFetchingPosts: selectors.isFetchingPosts(state)
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPosts: (data) => dispatch(getPosts(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
