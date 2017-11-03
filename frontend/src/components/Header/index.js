import React from 'react'
import { Search, Menu } from 'semantic-ui-react'
import StyledLink from 'components/StyledLink'
import Logo from 'components/Logo'

const Header = (props) => (
  <div>
    <Menu attached='top'>
      <Menu.Item>
        <Logo />
      </Menu.Item>
      {props.categories.map((category, index) => (
        <Menu.Item key={index}>
          <StyledLink to={`/categories/${category.path}`}>{category.name}</StyledLink>
        </Menu.Item>
      ))}
      <Menu.Item position='right'>
        <Search
          loading={false}
        />
      </Menu.Item>
    </Menu>
  </div>
)

export default Header
