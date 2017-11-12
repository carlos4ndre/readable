import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Button, Header, Modal } from 'semantic-ui-react'
import { deleteComment } from 'actions/comments'

class DeleteCommentForm extends Component {
  state = {
    modalOpen: false
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => {
    this.setState({ modalOpen: false })
  }

  handleSubmit = (comment) => {
    this.props.deleteComment(comment)
  }

  render() {
    const { children, comment } = this.props
    const { modalOpen } = this.state

    return (
      <Modal
        trigger={children}
        dimmer='blurring'
        size='tiny'
        open={modalOpen}
        onOpen={this.handleOpen}
        onClose={this.handleClose}
        closeOnEscape={false}
        closeOnRootNodeClick={false}
      >
        <Header icon='trash' content='Delete Comment' />
        <Modal.Content>
          <p>Are you sure you want to delete this comment?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            basic
            icon='remove'
            color='red'
            content='no'
            onClick={this.handleClose}
          />
          <Button
            basic
            icon='checkmark'
            color='green'
            content='yes'
            onClick={() => this.handleSubmit(comment)}
          />
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  deleteComment: (post) => dispatch(deleteComment(post))
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteCommentForm))
