import React from 'react'
import { Menu, Dropdown, Container  } from 'semantic-ui-react'

export const options = [
  { key: 1, text: 'Top', value: 'Top'  },
  { key: 2, text: 'Latest', value: 'Latest' },
]

const SortBy = () => (
  <Container>
    <Menu compact>
      <Dropdown text='SortBy' options={options} defaultValue={options[0].value} simple item />
    </Menu>
  </Container>
)

export default SortBy
