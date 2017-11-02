import React from 'react'
import { Container } from 'semantic-ui-react'
import Post from 'components/Post'

const PostList = (props) => (
  <Container>
    {props.posts.map((post, index) => (
      <Post key={index} index={index} {...post}/>
    ))}
  </Container>
)

export default PostList
