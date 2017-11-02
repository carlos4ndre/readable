import React from 'react'
import { Search, Menu } from 'semantic-ui-react'
import StyledLink from 'components/StyledLink'
import Logo from 'components/Logo'

const Header = () => (
  <div>
    <Menu fixed='top'>
        <Menu.Item>
          <Logo />
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
