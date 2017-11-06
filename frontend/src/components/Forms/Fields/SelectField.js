import React from 'react'
import { Form, Select } from 'semantic-ui-react'
import ValidationMessage from 'components/Forms/Fields/ValidationMessage'

const SelectField = ({ input, meta, ...options }) => {
  const handleChange = (event, data) => input.onChange(data.value)

  return (
    <div>
      <Form.Field
        {...input}
        {...options}
        control={Select}
        onChange={handleChange}
      />
      <ValidationMessage {...meta}/>
    </div>
  )
}

export default SelectField