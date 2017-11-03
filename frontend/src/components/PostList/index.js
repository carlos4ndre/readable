import React from 'react'
import { Container } from 'semantic-ui-react'
import Post from 'components/Post'
import SortBy from 'components/SortBy'

const PostList = (props) => (
  <Container>
    <SortBy />
    {props.posts.map((post, index) => (
      <Post key={index} index={index} {...post}/>
    ))}
  </Container>
)

export default PostList
