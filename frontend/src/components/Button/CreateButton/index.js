import React from 'react'
import { Button } from 'semantic-ui-react'

const CreateButton = (props) => (
  <Button
    circular
    color='blue'
    content={props.content || 'Create'}
    {...props}
  />
)

export default CreateButton
