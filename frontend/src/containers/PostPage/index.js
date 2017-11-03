import React from 'react'

const PostPage = (props) => (
  <div>
    <p>Post {props.match.params.postId}!</p>
  </div>
)

export default PostPage
