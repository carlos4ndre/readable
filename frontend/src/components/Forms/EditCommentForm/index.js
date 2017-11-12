import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, SubmissionError, reduxForm, getFormSubmitErrors } from 'redux-form'
import { Modal, Button, Form, Divider, Header } from 'semantic-ui-react'
import { TextAreaField } from 'components/Forms/Fields'
import { required, maxLength250 } from 'components/Forms/Fields/validators'
import { updateComment } from 'actions/comments'
import SubmitErrorMessage from 'components/Forms/SubmitErrorMessage'

class EditCommentForm extends Component {
  state = {
    modalOpen: false
  }

  submit = values => new Promise((resolve, reject) => {
    const callbacks = { resolve, reject }
    const oldComment = this.props.initialValues
    const comment = {
      ...oldComment,
      body: values.body
    }

    this.props.updateComment(comment, callbacks)
  })

  asyncSubmit = values => this.submit(values)
    .then(response => {
      this.handleClose()
    })
    .catch(error => {
      throw new SubmissionError(error)
    })

  handleOpen = () => {
    this.setState({ modalOpen: true })
  }

  handleClose = () => {
    this.setState({ modalOpen: false })
    this.props.reset('editComment')
  }

  render() {
    const {
      children,
      handleSubmit,
      submitting,
      submitErrors
    } = this.props
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
        <Header icon='pencil' content='Edit Post'/>
        <Modal.Content image>
          <Modal.Description>
            <Form onSubmit={handleSubmit(this.asyncSubmit.bind(this))}>
              <Field
                name='body'
                label='Body'
                component={TextAreaField}
                validate={[required, maxLength250]}
              />
              <SubmitErrorMessage submitErrors={submitErrors}/>
              <Divider hidden />
              <Button.Group floated='right'>
                <Button
                  type='submit'
                  content='Cancel'
                  disabled={submitting}
                  onClick={this.handleClose}
                />
                <Button.Or />
                <Button
                  positive
                  type='submit'
                  content='Save'
                  disabled={submitting}
                />
              </Button.Group>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}


const mapStateToProps = (state, ownProps) => ({
  submitErrors: getFormSubmitErrors('editPost')(state)
})

const mapDispatchToProps = (dispatch) => ({
  updateComment: (comment, callbacks) => dispatch(updateComment(comment, callbacks))
})

EditCommentForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCommentForm)

export default reduxForm({
  form: 'editComment',
  enableReinitialize: true
})(EditCommentForm)
