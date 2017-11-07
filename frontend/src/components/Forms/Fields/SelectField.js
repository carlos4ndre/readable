import React from 'react'
import PropTypes from 'prop-types'
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

SelectField.PropTypes = {
  input: PropTypes.object.required,
  options: PropTypes.object.required,
  meta: PropTypes.object
}

export default SelectField
