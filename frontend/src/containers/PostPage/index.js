import React from 'react'
import PropTypes from 'prop-types'

const PostPage = (props) => (
  <div>
    <p>Post {props.match.params.postId}!</p>
  </div>
)

PostPage.PropTypes = {
  match: PropTypes.object.required,
}

export default PostPage
