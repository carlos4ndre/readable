import React from 'react'
import { Container, Message } from 'semantic-ui-react'

const NoComments = () => (
  <Container>
    <Message warning size='large'>
      <Message.Header>No comments! What?</Message.Header>
      <span role="img" aria-label="horns">Don't be shy! Go ahead and share your thoughts 🖖</span>
    </Message>
  </Container>
)

export default NoComments
