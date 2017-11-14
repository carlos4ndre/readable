import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, SubmissionError, reduxForm, getFormSubmitErrors } from 'redux-form'
import { Modal, Button, Form, Divider, Header } from 'semantic-ui-react'
import { updatePost } from 'actions/posts'
import { InputTextField, TextAreaField } from 'components/Forms/Fields'
import { required, maxLength50, maxLength250 } from 'components/Forms/Fields/validators'
import { EDIT_POST_FORM } from 'components/Forms/names'
import SubmitErrorMessage from 'components/Forms/SubmitErrorMessage'

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
    this.props.reset(EDIT_POST_FORM)
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

EditPostForm.PropTypes = {
  post: PropTypes.object.required
}

const mapStateToProps = (state, ownProps) => ({
  submitErrors: getFormSubmitErrors(EDIT_POST_FORM)(state)
})

const mapDispatchToProps = (dispatch) => ({
  updatePost: (post, callbacks) => dispatch(updatePost(post, callbacks))
})

EditPostForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPostForm)

export default reduxForm({
  form: EDIT_POST_FORM,
  enableReinitialize: true
})(EditPostForm)
