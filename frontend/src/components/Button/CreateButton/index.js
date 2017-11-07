import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

const CreateButton = (props) => (
  <Button
    circular
    color='blue'
    content={props.content || 'Create'}
    {...props}
  />
)

CreateButton.PropTypes = {
  content: PropTypes.string
}

export default CreateButton
