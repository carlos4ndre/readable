import React from 'react'
import { Container, Message } from 'semantic-ui-react'

const NoPosts = () => (
  <Container>
    <Message warning size='large'>
      <Message.Header>No posts found</Message.Header>
      <span>No worries, Let's create some! 🤘💯</span>
    </Message>
  </Container>
)

export default NoPosts
