import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input  } from 'semantic-ui-react'
import ValidationMessage from 'components/Forms/Fields/ValidationMessage'

const InputTextField = ({ input, meta, ...options }) => (
  <div>
    <Form.Field
      {...input}
      {...options}
      type='text'
      control={Input}
    />
    <ValidationMessage {...meta}/>
  </div>
)

InputTextField.PropTypes = {
  input: PropTypes.object.required,
  options: PropTypes.object.required,
  meta: PropTypes.object.required
}

export default InputTextField
