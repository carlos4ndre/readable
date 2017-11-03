import React from 'react'
import { Icon } from 'semantic-ui-react'
import StyledLink from 'components/StyledLink'

const Logo = () => (
  <h2>
    <StyledLink to='/'>
      <Icon name='university'/>
      Readable
    </StyledLink>
  </h2>
)

export default Logo
