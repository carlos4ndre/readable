import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Header, Segment, Label, Statistic, Divider } from 'semantic-ui-react'
import DateFormat from 'components/DateFormat'
import StyledLink from 'components/StyledLink'

const PostProfile = (props) => {
  const {
    title,
    body,
    author,
    category,
    timestamp,
    voteScore,
    commentCount
  } = props

  const postDate = <DateFormat timestamp={timestamp}/>
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
            <Segment>
              Posted on {postDate} by {postAuthor}
            </Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Statistic.Group items={items} />
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
