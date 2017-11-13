import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid, Header, Segment, Label, Statistic, Button } from 'semantic-ui-react'
import * as selectors from 'selectors'
import { votePost } from 'actions/posts'
import { UP_VOTE, DOWN_VOTE } from 'utils/vote'
import { EditPostForm, DeletePostForm, CreateCommentForm } from 'components/Forms'
import StyledLink from 'components/StyledLink'
import CommentList from 'components/CommentList'
import DateFormat from 'components/DateFormat'
import NoComments from 'components/NoComments'
import ScorePanel from 'components/ScorePanel'
import LoadingIcon from 'components/LoadingIcon'
import Text from 'components/Text'

const PostProfile = (props) => {
  const { post, comments, votePost, isFetchingComments } = props
  const {
    id,
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

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Header as='h1'>{title}</Header>
          <Segment.Group>
            <Segment>
              <Grid>
                <Grid.Column width={2}>
                  <StyledLink hoverhighlight='false' to={`/categories/${category}`}>
                    <Label color='blue' content={category} ribbon/>
                  </StyledLink>
                </Grid.Column>
                <Grid.Column width={12}>
                  <Text>{body}</Text>
                </Grid.Column>
                <Grid.Column textAlign='right' width={2}>
                  <ScorePanel
                    onUpVoteClick={() => votePost(id, UP_VOTE)}
                    onDownVoteClick={() => votePost(id, DOWN_VOTE)}
                  />
                </Grid.Column>
              </Grid>
            </Segment>
            <Segment.Group basic='true' horizontal>
              <Segment clearing>
                <span>Posted on {postDate} by {postAuthor}</span>
                <DeletePostForm post={post}>
                  <Button circular color='red' icon='trash' floated='right'/>
                </DeletePostForm>
                <EditPostForm initialValues={post}>
                  <Button circular color='olive' icon='pencil' floated='right'/>
                </EditPostForm>
              </Segment>
            </Segment.Group>
          </Segment.Group>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Statistic
          label='Comments'
          value={commentCount}
          color='blue'
        />
        <Statistic
          label='Score'
          value={voteScore}
          color={voteScore > 0 ? 'green' : 'red'}
        />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          { isFetchingComments ?
              <LoadingIcon />
            :
              commentCount > 0 ?
                <CommentList comments={comments}/> : <NoComments />
          }
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <CreateCommentForm post={post}/>
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
  author: PropTypes.string.required
}

const mapStateToProps = (state) => ({
  isFetchingComments: selectors.isFetchingComments(state)
})

const mapDispatchToProps = (dispatch) => ({
  votePost: (postId, value) => dispatch(votePost(postId, value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostProfile)
