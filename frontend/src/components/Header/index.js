import React from 'react'
import PropTypes from 'prop-types'
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
          <StyledLink to={`/${category.path}`}>{category.name}</StyledLink>
        </Menu.Item>
      ))}
      {/* NOTE: search button left here just for reference, it would be nice to index posts on the back-end
      using a data store like elastic search and return matching results */}
      <Menu.Item position='right'>
        <Search loading={false}/>
      </Menu.Item>
    </Menu>
  </div>
)

Header.PropTypes = {
  categories: PropTypes.array.required
}

export default Header
