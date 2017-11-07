import React from 'react'
import PropTypes from 'prop-types'
import { Message } from 'semantic-ui-react'

const ValidationMessage = (props) => {
  const { touched, error, warning } = props

  return (
    <div>
      {touched &&
        ((error && <Message negative content={error}/>) ||
         (warning && <Message warning content={warning}/>))}
    </div>
  )
}

ValidationMessage.PropTypes = {
  input: PropTypes.object.required,
  options: PropTypes.object.required,
  meta: PropTypes.object
}

export default ValidationMessage
