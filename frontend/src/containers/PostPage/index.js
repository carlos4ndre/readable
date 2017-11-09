import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import LoadingIcon from 'components/LoadingIcon'
import { getPost } from 'actions/posts'
import { getComments } from 'actions/comments'
import * as selectors from 'selectors'
import PostProfile from 'components/PostProfile'

class PostPage extends Component {

  componentWillMount() {
    const { post, match } = this.props
    const postId = match.params.postId

    // check data has already been fetched
    if (!post) {
      this.props.getPost(postId)
      this.props.getComments(postId)
    }

    if (post && !post.comments) {
      this.props.getComments(postId)
    }
  }

  render() {
    const { post, comments, isFetchingPost } = this.props

    return (
      <Container text>
        {isFetchingPost ?
          <LoadingIcon />
        :
          post && <PostProfile post={post} comments={comments} />
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
    post: selectors.getPostById(state, postId),
    comments: selectors.getPostComments(state, postId),
    isFetchingPost: selectors.isFetchingPost(state, postId)
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPost: (postId) => dispatch(getPost(postId)),
  getComments: (postId) => dispatch(getComments(postId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPage)
