import React from 'react'
import { Grid, Label, List, Icon  } from 'semantic-ui-react'
import StyledLink from 'components/StyledLink'
import Moment from 'react-moment'

const Post = (props) => {
  const { id, index, title, timestamp, commentCount, author } = props
  const postNumber = index + 1
  const postDate = <Moment format="DD/MM/YYYY" unix>{timestamp/1000}</Moment>
  const postAuthor = <Label color='teal' content={author} icon='user'/>
  const postTotalComments = <Label color='teal' circular>{commentCount}</Label>
  const postUrl = `/posts/${id}`

  return (
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={1} textAlign='center'>
          {postNumber}
        </Grid.Column>
        <Grid.Column width={1} textAlign='center'>
          <Icon link color='olive' name='chevron up'/>
          <Icon link color='red' name='chevron down'/>
        </Grid.Column>
        <Grid.Column width={14}>
          <List>
            <List.Item>
              <StyledLink to={postUrl}>{title}</StyledLink>
            </List.Item>
            <List.Item>Posted on {postDate} by {postAuthor}</List.Item>
            <List.Item>{postTotalComments} comments</List.Item>
          </List>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Post
