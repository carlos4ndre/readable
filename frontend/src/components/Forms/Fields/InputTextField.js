import React from 'react'
import { Form, Input, Message  } from 'semantic-ui-react'

const InputTextField = ({ input, meta, ...options }) => {
  const { touched, error, warning } = meta

  return (
    <div>
      <Form.Field
        {...input}
        {...options}
        type='text'
        control={Input}
      />
      {touched &&
        ((error && <Message negative content={error}/>) ||
         (warning && <Message warning content={warning}/>))}
    </div>
  )
}

export default InputTextField
