import React from 'react'
import { Menu, Dropdown, Container  } from 'semantic-ui-react'
import { OPTIONS, LATEST } from 'data/sorting'

const SortBy = (props) => (
  <Container>
    <Menu compact>
      <Dropdown
        selection
        text='SortBy'
        options={OPTIONS}
        defaultValue={LATEST}
        onChange={(event, data) => props.onChange(data.value)}
      />
    </Menu>
  </Container>
)

export default SortBy
