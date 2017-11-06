import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'
import { Field, reduxForm } from 'redux-form'
import { Modal, Button, Form, Divider } from 'semantic-ui-react'
import { InputTextField, TextAreaField, SelectField } from 'components/Forms/Fields'
import { CreateButton } from 'components/Button'
import { required, maxLength30, maxLength250 } from 'components/Forms/Fields/validators'
import { getUnixTimeNow } from 'utils/date'

const submit = props => values => {
  const newPost = {
    ...values,
    id: uuidv4(),
    timestamp: getUnixTimeNow(),
    author: values.author || 'Anonymous'
  }

  // dispatch post
  console.log("Dispatch create post", newPost)

  // clear form
  this.props.reset()

  // close modal
  this.handleClose()
}

class CreatePostForm extends Component {
  state = {
    modalOpen: false
  }

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })

  render() {
    const {
      primary = true,
      categories,
      handleSubmit,
      submitting
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
            <Form onSubmit={handleSubmit(submit).bind(this)}>
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

export default reduxForm({
  form: 'createPosts'
})(CreatePostForm)
