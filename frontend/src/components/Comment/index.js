import React from 'react'
import PropTypes from 'prop-types'
import { Feed, Label, Icon, List } from 'semantic-ui-react'
import { UP_VOTE, DOWN_VOTE } from 'data/vote'
import { EditCommentForm, DeleteCommentForm } from 'components/Forms'
import DateFormat from 'components/DateFormat'

const Comment = ({ comment, voteComment, deleteComment }) => {
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
      onClick={() => voteComment(comment.id, UP_VOTE)}
    />
  )
  const thumbsDown = (
    <Icon
      link
      name='thumbs outline down'
      size='large'
      onClick={() => voteComment(comment.id, DOWN_VOTE)}
    />
  )
  const deleteButton = (
    <Icon
      link
      name='trash'
      size='large'
    />
  )
  const editButton = (
    <Icon
      link
      name='pencil'
      size='large'
    />
  )

  return (
    <Feed.Event key={comment.id}>
       <Feed.Label icon='comment outline' />
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
             <List.Item>
               <EditCommentForm form={comment.id} initialValues={comment}>
                 {editButton}
               </EditCommentForm>
             </List.Item>
             <List.Item>
               <DeleteCommentForm comment={comment}>
                 {deleteButton}
              </DeleteCommentForm>
             </List.Item>
           </List>
         </Feed.Meta>
       </Feed.Content>
    </Feed.Event>
  )
}

Comment.PropTypes = {
  comment: PropTypes.object.required,
  voteComment: PropTypes.object.required,
  deleteComment: PropTypes.object.required
}

export default Comment
