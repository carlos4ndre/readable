import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'semantic-ui-react'
import { OPTIONS, TOP } from 'utils/sorting'

const SortBy = (props) => (
  <Dropdown
    selection
    compact
    text='Sort By'
    options={OPTIONS}
    defaultValue={TOP}
    onChange={(event, data) => props.onChange(data.value)}
  />
)

SortBy.PropTypes = {
  onChange: PropTypes.func.required
}

export default SortBy
