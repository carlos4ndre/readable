import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Feed } from 'semantic-ui-react'
import { sortByScore } from 'utils/sorting'
import { voteComment, deleteComment } from 'actions/comments'
import Comment from 'components/Comment'

const CommentList = ({comments, voteComment, deleteComment}) => (
  <Feed>
  {
    comments.sort(sortByScore).map(comment =>
      <Comment
        key={comment.id}
        voteComment={voteComment}
        deleteComment={deleteComment}
        comment={comment}
      />
    )
  }
  </Feed>
)

CommentList.PropTypes = {
  comments: PropTypes.array.required
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  voteComment: (commentId, value) => dispatch(voteComment(commentId, value)),
  deleteComment: (comment) => dispatch(deleteComment(comment))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList)
