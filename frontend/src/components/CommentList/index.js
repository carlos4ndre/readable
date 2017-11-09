import React from 'react'
import PropTypes from 'prop-types'
import { Feed, Label } from 'semantic-ui-react'
import DateFormat from 'components/DateFormat'

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
             {commentScore}
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

export default CommentList
