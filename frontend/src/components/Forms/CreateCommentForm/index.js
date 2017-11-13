import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uuidv4 from 'uuid/v4'
import { connect } from 'react-redux'
import { Field, SubmissionError, reduxForm, getFormSubmitErrors } from 'redux-form'
import { Container, Header, Form, Button, Divider } from 'semantic-ui-react'
import { createComment } from 'actions/comments'
import { getUnixTimeNow } from 'utils/date'
import { CREATE_COMMENT_FORM } from 'components/Forms/names'
import { InputTextField, TextAreaField } from 'components/Forms/Fields'
import { required, maxLength50, maxLength250 } from 'components/Forms/Fields/validators'
import SubmitErrorMessage from 'components/Forms/SubmitErrorMessage'

class CreateCommentForm extends Component {

  submit = values => new Promise((resolve, reject) => {
    const comment = {
      id: uuidv4(),
      body: values.body,
      author: values.author || 'Anonymous',
      timestamp: getUnixTimeNow(),
      parentId: this.props.post.id,
      voteScore: 1
    }
    const callbacks = { resolve, reject }

    this.props.createComment(comment, callbacks)
  })

  asyncSubmit = values => this.submit(values)
    .then(response => {
      this.handleClose()
    })
    .catch(error => {
      throw new SubmissionError(error)
    })

  handleClose = () => {
    this.props.reset(CREATE_COMMENT_FORM)
  }

  render() {
    const {
      handleSubmit,
      submitErrors,
      submitting
    } = this.props

    return (
      <Container>
        <Header>Leave a comment</Header>
        <Form onSubmit={handleSubmit(this.asyncSubmit.bind(this))}>
          <Field
            name='body'
            label='Body'
            placeholder='Have your saying...'
            component={TextAreaField}
            validate={[required, maxLength250]}
          />
          <Field
            name='author'
            label='Author'
            placeholder='Who should be credited for this comment'
            validate={[maxLength50]}
            component={InputTextField}
          />
          <SubmitErrorMessage submitErrors={submitErrors}/>
          <Divider hidden />
          <Button
            type='submit'
            content='Submit'
            disabled={submitting}
          />
        </Form>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  submitErrors: getFormSubmitErrors(CREATE_COMMENT_FORM)(state)
})

const mapDispatchToProps = (dispatch) => ({
  createComment: (comment, callbacks) => dispatch(createComment(comment, callbacks))
})

CreateCommentForm.PropTypes = {
  post: PropTypes.object.required
}

CreateCommentForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateCommentForm)

export default reduxForm({
  form: CREATE_COMMENT_FORM
})(CreateCommentForm)
