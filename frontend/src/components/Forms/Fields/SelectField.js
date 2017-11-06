import React from 'react'
import { Form, Select, Message } from 'semantic-ui-react'

const SelectField = ({ input, meta, ...options }) => {
  const { touched, error, warning } = meta
  const handleChange = (event, data) => input.onChange(data.value)

  return (
    <div>
      <Form.Field
        {...input}
        {...options}
        control={Select}
        onChange={handleChange}
      />
      {touched &&
        ((error && <Message negative content={error}/>) ||
         (warning && <Message warning content={warning}/>))}
    </div>
  )
}

export default SelectField
