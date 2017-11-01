import React from 'react'
import { Search, Menu, Icon } from 'semantic-ui-react'
import StyledLink from 'components/StyledLink'

const Header = () => (
  <div>
    <Menu fixed='top'>
        <Menu.Item>
          <h2>
            <Icon name='university' />
            Readable
          </h2>
        </Menu.Item>
        <Menu.Item>
          <StyledLink to='/'>Top</StyledLink>
        </Menu.Item>
        <Menu.Item>
          <StyledLink to='/'>Latest</StyledLink>
        </Menu.Item>
        <Menu.Item position='right'>
          <Search
            loading={false}
          />
        </Menu.Item>
    </Menu>
  </div>
)

export default Header
