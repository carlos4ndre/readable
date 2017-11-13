import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Dropdown, Container  } from 'semantic-ui-react'
import { OPTIONS, TOP } from 'utils/sorting'

const SortBy = (props) => (
  <Container>
    <Menu compact>
      <Dropdown
        selection
        compact
        text='SortBy'
        options={OPTIONS}
        defaultValue={TOP}
        onChange={(event, data) => props.onChange(data.value)}
      />
    </Menu>
  </Container>
)

SortBy.PropTypes = {
  onChange: PropTypes.func.required
}

export default SortBy
