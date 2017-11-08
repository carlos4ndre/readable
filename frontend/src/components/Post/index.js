import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Label, List } from 'semantic-ui-react'
import StyledLink from 'components/StyledLink'
import Moment from 'react-moment'
import ScorePanel from 'components/ScorePanel'

const Post = (props) => {
  const { id, index, title, voteScore = 0, timestamp, commentCount = 0, author } = props
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

Post.PropTypes = {
  id: PropTypes.string.required,
  index: PropTypes.number.required,
  title: PropTypes.string.required,
  voteScore: PropTypes.number.required,
  timestamp: PropTypes.number.required,
  commentCount: PropTypes.number.required,
  author: PropTypes.string.required,
}

export default Post
