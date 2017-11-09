import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uuidv4 from 'uuid/v4'
import { connect } from 'react-redux'
import { Field, SubmissionError, reduxForm, getFormSubmitErrors } from 'redux-form'
import { Modal, Button, Form, Divider, Message } from 'semantic-ui-react'
import { InputTextField, TextAreaField, SelectField } from 'components/Forms/Fields'
import { CreateButton } from 'components/Button'
import { required, maxLength30, maxLength250 } from 'components/Forms/Fields/validators'
import { createPost } from 'actions/posts'
import { getUnixTimeNow } from 'utils/date'


class CreatePostForm extends Component {
  state = {
    modalOpen: false
  }

  submit = values => new Promise((resolve, reject) => {
    const data = {
      ...values,
      id: uuidv4(),
      timestamp: getUnixTimeNow(),
      author: values.author || 'Anonymous'
    }
    const callbacks = { resolve, reject }

    // dispatch post
    this.props.createPost(data, callbacks)
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

    // clear form
    this.props.reset()
  }

  render() {
    const {
      primary = true,
      categories,
      handleSubmit,
      submitting,
      submitErrors
    } = this.props
    const { modalOpen } = this.state

    const categoryOptions = categories.map(category => ({
      key: category.name,
      text: category.name,
      value: category.name
    }))

    const trigger = <CreateButton
      content={primary ? 'Create Post' : 'Be the first! 🎉💈🔮✨'}
      size={primary ? 'medium' : 'massive'}
      onClick={this.handleOpen}
    />

    return (
      <Modal trigger={trigger} dimmer='blurring' size='tiny' open={modalOpen} onClose={this.handleClose}>
        <Modal.Header>Create Post</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Form onSubmit={handleSubmit(this.asyncSubmit.bind(this))}>
              <Field
                name='title'
                label='Title'
                placeholder='Epic title goes in here'
                component={InputTextField}
                validate={[required, maxLength30]}
              />
              <Field
                name='body'
                label='Body'
                placeholder="What's this all about..."
                component={TextAreaField}
                validate={[required, maxLength250]}
              />
              <Field
                name='author'
                label='Author'
                placeholder='Who should be credited for this post'
                component={InputTextField}
              />
              <Field
                name='category'
                label='Category'
                options={categoryOptions}
                placeholder='- Select -'
                component={SelectField}
                validate={[required]}
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
                  content='Create'
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

CreatePostForm.PropTypes = {
  primary: PropTypes.bool,
  categories: PropTypes.array.required
}

const mapStateToProps = (state) => ({
  submitErrors: getFormSubmitErrors('createPost')(state)
})

const mapDispatchToProps = (dispatch) => ({
  createPost: (data, callbacks) => dispatch(createPost(data, callbacks))
})

CreatePostForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePostForm)

export default reduxForm({
  form: 'createPost'
})(CreatePostForm)
