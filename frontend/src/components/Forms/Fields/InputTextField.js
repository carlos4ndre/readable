import React from 'react'
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

export default InputTextField
