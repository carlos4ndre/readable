import React from 'react'
import { Grid } from 'semantic-ui-react'

const PostList = (props) => (
  <Grid padded>
    {props.posts.map((post, index) => (
      <Grid.Row key={index}>
        <Grid.Column>
          <p>{post.id}</p>
          <p>{post.timestamp}</p>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <p>{post.author}</p>
          <p>{post.deleted}</p>
          <p>{post.commentCount}</p>
          <p>{post.voteScore}</p>
          <p>{post.category}</p>
        </Grid.Column>
      </Grid.Row>
    ))}
  </Grid>
)

export default PostList
