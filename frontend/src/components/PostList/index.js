import React from 'react'
import { Container } from 'semantic-ui-react'
import Post from 'components/Post'
import SortBy from 'components/SortBy'
import NoPosts from 'components/NoPosts'

const PostList = (props) => {
  const { posts } = props

  if (posts.length === 0)
    return <NoPosts />

  return (
    <Container>
      <SortBy />
      {posts.map((post, index) => (
        <Post key={index} index={index} {...post}/>
      ))}
    </Container>
  )
}

export default PostList
