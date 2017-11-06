import React from 'react'
import { Form, TextArea, Message } from 'semantic-ui-react'

const TextAreaField = ({ input, meta, ...options }) => {
  const { touched, error, warning } = meta

  return (
    <div>
      <Form.Field
        {...input}
        {...options}
        control={TextArea}
      />
      {touched &&
        ((error && <Message negative content={error}/>) ||
         (warning && <Message warning content={warning}/>))}
    </div>
  )
}

export default TextAreaField
