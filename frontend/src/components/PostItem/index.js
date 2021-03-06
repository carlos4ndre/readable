import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid, Label, List } from 'semantic-ui-react'
import { votePost } from 'actions'
import { UP_VOTE, DOWN_VOTE } from 'utils/vote'
import StyledLink from 'components/StyledLink'
import ScorePanel from 'components/ScorePanel'
import DateFormat from 'components/DateFormat'

const PostItem = (props) => {
  const {
    id,
    index,
    title,
    category,
    voteScore = 0,
    timestamp,
    commentCount = 0,
    author,
    votePost
  } = props

  const postNumber = index + 1
  const postDate = <b><DateFormat timestamp={timestamp}/></b>
  const postAuthor = <Label color='teal' content={author || 'Anonymous'} icon='user'/>
  const postTotalComments = <Label color='teal' circular>{commentCount}</Label>
  const postUrl = `/${category}/${id}`

  return (
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={1} textAlign='center'  verticalAlign='middle'>
          {postNumber}
        </Grid.Column>
        <Grid.Column width={1} textAlign='center'>
          <ScorePanel
            onUpVoteClick={() => votePost(id, UP_VOTE)}
            onDownVoteClick={() => votePost(id, DOWN_VOTE)}
            value={voteScore}/>
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

PostItem.PropTypes = {
  id: PropTypes.string.required,
  index: PropTypes.number.required,
  title: PropTypes.string.required,
  voteScore: PropTypes.number.required,
  timestamp: PropTypes.number.required,
  commentCount: PropTypes.number.required,
  author: PropTypes.string.required,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  votePost: (postId, value) => dispatch(votePost(postId, value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostItem)
