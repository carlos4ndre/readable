import React from 'react'
import PropTypes from 'prop-types'
import { Message } from 'semantic-ui-react'

const SubmitErrorMessage = ({ submitErrors }) => (
  <div>
  { submitErrors && submitErrors.error &&
    <Message
      icon='warning'
      color='red'
      header='Ups... Kittens have taken our servers!'
      content={submitErrors.error}
    />
  }
  </div>
)

SubmitErrorMessage.PropTypes = {
  submitErrors: PropTypes.object.required
}

export default SubmitErrorMessage
