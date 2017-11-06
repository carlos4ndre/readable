import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Modal, Button, Form, Divider } from 'semantic-ui-react'
import { InputTextField, TextAreaField, SelectField } from 'components/Forms/Fields'
import { required, maxLength30, maxLength250 } from 'components/Forms/Fields/validators'

const submit = values => {
  console.log(values)
}

const CreatePostForm = (props) => {
  const {
    open,
    close,
    categories,
    handleSubmit,
    submitting
  } = props
  const categoryOptions = categories.map(category => ({
    key: category.name,
    text: category.name,
    value: category.name
  }))

  return (
    <Modal dimmer='blurring' size='tiny' open={open} onClose={close}>
      <Modal.Header>Create Post</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Form onSubmit={handleSubmit(submit)}>
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
                onClick={close}
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

export default reduxForm({
  form: 'createPosts'
})(CreatePostForm)
