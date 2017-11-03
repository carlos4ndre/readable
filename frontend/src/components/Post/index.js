import React from 'react'
import { Grid, Label, List } from 'semantic-ui-react'
import StyledLink from 'components/StyledLink'
import Moment from 'react-moment'
import ScorePanel from 'components/ScorePanel'

const Post = (props) => {
  const { id, index, title, voteScore, timestamp, commentCount, author } = props
  const postNumber = index + 1
  const postDate = <Moment format="DD/MM/YYYY" unix>{timestamp/1000}</Moment>
  const postAuthor = <Label color='teal' content={author || 'Anonymous'} icon='user'/>
  const postTotalComments = <Label color='teal' circular>{commentCount}</Label>
  const postUrl = `/posts/${id}`

  return (
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={1} textAlign='center'  verticalAlign='middle'>
          {postNumber}
        </Grid.Column>
        <Grid.Column width={1} textAlign='center'>
          <ScorePanel value={voteScore}/>
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
