import React from 'react'
import PropTypes from 'prop-types'
import { Form, TextArea } from 'semantic-ui-react'
import ValidationMessage from 'components/Forms/Fields/ValidationMessage'

const TextAreaField = ({ input, meta, ...options }) => (
  <div>
    <Form.Field
      {...input}
      {...options}
      control={TextArea}
    />
    <ValidationMessage {...meta} />
  </div>
)

TextAreaField.PropTypes = {
  input: PropTypes.object.required,
  options: PropTypes.object.required,
  meta: PropTypes.object
}

export default TextAreaField
