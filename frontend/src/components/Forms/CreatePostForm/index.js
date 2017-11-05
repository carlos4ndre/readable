import React, { Component } from 'react'
import { Modal, Button, Form, TextArea, Input, Select } from 'semantic-ui-react'

class CreatePostForm extends Component {
  state = {
    title: '',
    body: '',
    author: '',
    category: ''
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    console.log({
      ...this.state,
      category: this.state.category || 'anonymous'
    })

    // dispatch action
    // close form
    this.props.close()
  }

  render() {
    const { open, close, categories } = this.props
    const { title, body, author, category } = this.state
    const categoryOptions = categories.map(c => ({
      key: c.name,
      text: c.name,
      value: c.name
    }))

    return (
      <Modal dimmer='blurring' size='tiny' open={open} onClose={close}>
        <Modal.Header>Create Post</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field
                required
                control={Input}
                label='Title'
                name='title'
                value={title}
                placeholder='Epic title goes in here'
                onChange={this.handleChange}
              />
              <Form.Field
                required
                control={TextArea}
                label='Body'
                name='body'
                value={body}
                placeholder="What's this all about..."
                onChange={this.handleChange}
              />
              <Form.Field
                control={Input}
                label='Author'
                name='author'
                value={author}
                placeholder='Who should be credited for this post'
                onChange={this.handleChange}
              />
              <Form.Field
                required
                control={Select}
                label='Category'
                name='category'
                value={category}
                options={categoryOptions}
                placeholder='- Select -'
                onChange={this.handleChange}
              />
              <Button.Group floated='right'>
                <Button
                  content='Cancel'
                  onClick={close}
                />
                <Button.Or />
                <Button
                  positive
                  content='Create'
                />
              </Button.Group>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export default CreatePostForm
