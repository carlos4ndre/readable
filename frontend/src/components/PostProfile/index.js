import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Header, Segment, Label, Statistic, Divider, Button } from 'semantic-ui-react'
import StyledLink from 'components/StyledLink'
import CommentList from 'components/CommentList'
import DateFormat from 'components/DateFormat'
import NoComments from 'components/NoComments'

const PostProfile = (props) => {
  const { post, comments } = props
  const {
    title,
    body,
    author,
    category,
    timestamp,
    voteScore,
    commentCount
  } = post

  const postDate = <b><DateFormat timestamp={timestamp}/></b>
  const postAuthor = <Label color='teal' content={author || 'Anonymous'} icon='user'/>
  const items = [
    {
      key: 'totalComments',
      label: 'Comments',
      value: commentCount,
      color: 'blue'
    },
    {
      key: 'voteScore',
      label: 'Score',
      value: voteScore,
      color: voteScore > 0 ? 'green' : 'red'
    }
  ]

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Header as='h1'>{title}</Header>
          <Segment.Group>
            <Segment>
              <StyledLink hoverhighlight='false' to={`/categories/${category}`}>
                <Label color='blue' content={category} ribbon/>
              </StyledLink>
              <span>{body}</span>
              <Divider hidden/>
            </Segment>
            <Segment.Group basic horizontal>
              <Segment clearing>
                <span>Posted on {postDate} by {postAuthor}</span>
                <Button circular color='red' icon='trash' floated='right'/>
                <Button circular color='olive' icon='pencil' floated='right'/>
              </Segment>
            </Segment.Group>
          </Segment.Group>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Statistic.Group items={items}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          { commentCount > 0 ?
            <CommentList comments={comments}/>
          :
            <NoComments />
          }
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

PostProfile.PropTypes = {
  id: PropTypes.string.required,
  index: PropTypes.number.required,
  title: PropTypes.string.required,
  voteScore: PropTypes.number.required,
  timestamp: PropTypes.number.required,
  commentCount: PropTypes.number.required,
  author: PropTypes.string.required,
}

export default PostProfile
