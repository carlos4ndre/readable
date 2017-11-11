import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Feed, Label, Icon, List } from 'semantic-ui-react'
import DateFormat from 'components/DateFormat'
import { UP_VOTE, DOWN_VOTE } from 'data/vote'
import { voteComment } from 'actions/comments'

const CommentList = (props) => (
  <Feed>
  { props.comments.map(comment => {
    const createdOn = <DateFormat fromNow={true} timestamp={comment.timestamp}/>
    const commentAuthor = <span color='teal'>{comment.author}</span>
    const commentScore = (
      <Label
        color={comment.voteScore > 0 ? 'green' : 'red'}
        content={comment.voteScore}
        icon='star'
      />
    )
    const thumbsUp = (
      <Icon
        link
        name='thumbs outline up'
        size='large'
        onClick={() => props.voteComment(comment.id, UP_VOTE)}
      />
    )
    const thumbsDown = (
      <Icon
        link
        name='thumbs outline down'
        size='large'
        onClick={() => props.voteComment(comment.id, DOWN_VOTE)}
      />
    )

    return (
      <Feed.Event key={comment.id}>
         <Feed.Label icon='pencil' />
         <Feed.Content>
           <Feed.Summary>
             {commentAuthor} submitted a comment
             <Feed.Date>{createdOn}</Feed.Date>
           </Feed.Summary>
           <Feed.Extra text>
             {comment.body}
           </Feed.Extra>
           <Feed.Meta>
             <List horizontal>
               <List.Item>
                 {commentScore}
               </List.Item>
               <List.Item>
                 {thumbsUp}
               </List.Item>
               <List.Item>
                 {thumbsDown}
               </List.Item>
             </List>
           </Feed.Meta>
         </Feed.Content>
      </Feed.Event>
    )
  })}
  </Feed>
)

CommentList.PropTypes = {
  comments: PropTypes.array.required
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  voteComment: (commentId, value) => dispatch(voteComment(commentId, value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentList)
