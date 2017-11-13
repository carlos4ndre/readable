import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import * as selectors from 'selectors'
import { getPost } from 'actions/posts'
import { getComments } from 'actions/comments'
import LoadingIcon from 'components/LoadingIcon'
import PostProfile from 'components/PostProfile'
import NotFound from 'components/NotFound'

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
          post && post.id ?
            <PostProfile post={post} comments={comments} />
          :
            <NotFound />
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
