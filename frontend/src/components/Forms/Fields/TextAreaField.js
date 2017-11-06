import React from 'react'
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

export default TextAreaField
