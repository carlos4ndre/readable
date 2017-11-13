import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uuidv4 from 'uuid/v4'
import { connect } from 'react-redux'
import { Field, SubmissionError, reduxForm, getFormSubmitErrors } from 'redux-form'
import { Modal, Button, Form, Divider, Header } from 'semantic-ui-react'
import { createPost } from 'actions/posts'
import { getUnixTimeNow } from 'utils/date'
import { InputTextField, TextAreaField, SelectField } from 'components/Forms/Fields'
import { required, maxLength50, maxLength250 } from 'components/Forms/Fields/validators'
import SubmitErrorMessage from 'components/Forms/SubmitErrorMessage'

class CreatePostForm extends Component {
  state = {
    modalOpen: false
  }

  submit = values => new Promise((resolve, reject) => {
    const post = {
      ...values,
      id: uuidv4(),
      timestamp: getUnixTimeNow(),
      author: values.author || 'Anonymous',
      voteScore: 1,
      commentCount: 0
    }
    const callbacks = { resolve, reject }

    this.props.createPost(post, callbacks)
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
    this.props.reset()
  }

  render() {
    const {
      children,
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
        <Header icon='add square' content='Create Post'/>
        <Modal.Content image>
          <Modal.Description>
            <Form onSubmit={handleSubmit(this.asyncSubmit.bind(this))}>
              <Field
                name='title'
                label='Title'
                placeholder='Epic title goes in here'
                component={InputTextField}
                validate={[required, maxLength50]}
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
                validate={[maxLength50]}
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
  categories: PropTypes.array.required
}

const mapStateToProps = (state) => ({
  submitErrors: getFormSubmitErrors('createPost')(state)
})

const mapDispatchToProps = (dispatch) => ({
  createPost: (post, callbacks) => dispatch(createPost(post, callbacks))
})

CreatePostForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePostForm)

export default reduxForm({
  form: 'createPost'
})(CreatePostForm)
