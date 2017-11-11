import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, SubmissionError, reduxForm, getFormSubmitErrors } from 'redux-form'
import { Modal, Button, Form, Divider, Message, Header } from 'semantic-ui-react'
import { InputTextField, TextAreaField } from 'components/Forms/Fields'
import { required, maxLength50, maxLength250 } from 'components/Forms/Fields/validators'
import { updatePost } from 'actions/posts'

class EditPostForm extends Component {
  state = {
    modalOpen: false
  }

  submit = values => new Promise((resolve, reject) => {
    const callbacks = { resolve, reject }
    const oldPost = this.props.initialValues
    const post = {
      ...oldPost,
      title: values.title,
      body: values.body
    }

    this.props.updatePost(post, callbacks)
  })

  asyncSubmit = values => this.submit(values)
    .then(response => {
      this.handleClose()
    })
    .catch(error => {
      throw new SubmissionError(error)
    })

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => {
    this.setState({ modalOpen: false })
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
                name='title'
                label='Title'
                component={InputTextField}
                validate={[required, maxLength50]}
              />
              <Field
                name='body'
                label='Body'
                component={TextAreaField}
                validate={[required, maxLength250]}
              />
              { submitErrors && submitErrors.error &&
                <Message
                  icon='warning'
                  color='red'
                  header='Ups... Kittens have taken our servers!'
                  content={submitErrors.error}
                />
              }
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
  updatePost: (post, callbacks) => dispatch(updatePost(post, callbacks))
})

EditPostForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPostForm)

EditPostForm.PropTypes = {
  post: PropTypes.array.required
}
export default reduxForm({
  form: 'editPost'
})(EditPostForm)
