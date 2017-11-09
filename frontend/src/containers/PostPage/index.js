import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid, Header, Container } from 'semantic-ui-react'
import LoadingIcon from 'components/LoadingIcon'
import { getPost } from 'actions/posts'
import * as selectors from 'selectors'

class PostPage extends Component {

  componentWillMount() {
    const { post, match } = this.props
    const postId = match.params.postId

    if (!post) {
      this.props.getPost(postId)
    }
  }

  render() {
    const { post, isFetchingPost } = this.props

    return (
      <Container>
        {isFetchingPost ?
          <LoadingIcon />
        :
          post &&
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Header as='h1' dividing>{post.title}</Header>
                  <p>body: {post.body}</p>
                  <p>category: {post.category}</p>
                  <p>timestamp: {post.timestamp}</p>
                  <p>author: {post.author}</p>
                  <p>comment count: {post.commentCount}</p>
                  <p>vote score: {post.voteScore}</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
        }
      </Container>
    )
  }
}

PostPage.PropTypes = {
  match: PropTypes.object.required,
  post: PropTypes.object.required
}

const mapStateToProps = (state, props) => {
  const postId = props.match.params.postId

  return {
    post: selectors.getPostbyId(state, postId),
    isFetchingPost: selectors.isFetchingPost(state, postId)
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPost: (postId) => dispatch(getPost(postId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostPage)
