import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import * as selectors from 'selectors'
import { getPost } from 'actions'
import LoadingIcon from 'components/LoadingIcon'
import PostProfile from 'components/PostProfile'
import NotFound from 'components/NotFound'

class PostPage extends Component {

  componentWillMount() {
    const { getPost, match } = this.props
    const postId = match.params.postId
    getPost(postId)
  }

  render() {
    const { post, isFetchingPost } = this.props

    return (
      <Container text>
        {isFetchingPost ?
          <LoadingIcon />
        :
          post && post.id ?
            <PostProfile post={post}/>
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

const mapStateToProps = (originalState, originalOwnProps) => {
  return (state, ownProps) => {
    const postId = ownProps.match.params.postId

    return {
      post: selectors.getPost(state, postId),
      isFetchingPost: selectors.isFetchingPost(state)
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPost: (postId) => dispatch(getPost(postId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPage)
