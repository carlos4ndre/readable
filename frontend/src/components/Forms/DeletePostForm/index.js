import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Button, Header, Modal } from 'semantic-ui-react'
import { deletePost } from 'actions'

class DeletePostForm extends Component {
  state = {
    modalOpen: false
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => {
    this.setState({ modalOpen: false })
  }

  handleSubmit = (post) => {
    this.props.deletePost(post)
    this.props.history.push('/')
  }

  render() {
    const { children, post } = this.props
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
        <Header icon='trash' content='Delete Post'/>
        <Modal.Content>
          <p>Are you sure you want to delete this post?</p>
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
            onClick={() => this.handleSubmit(post)}
          />
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  deletePost: (post) => dispatch(deletePost(post))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DeletePostForm))
