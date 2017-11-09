import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import LoadingIcon from 'components/LoadingIcon'
import { getPost } from 'actions/posts'
import * as selectors from 'selectors'
import PostProfile from 'components/PostProfile'

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
      <Container text>
        {isFetchingPost ?
          <LoadingIcon />
        :
          post && <PostProfile {...post} />
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
