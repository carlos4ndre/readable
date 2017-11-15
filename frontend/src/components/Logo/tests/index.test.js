import React from 'react'
import { shallow } from 'enzyme'
import { Icon } from 'semantic-ui-react'
import Logo from 'components/Logo'
import StyledLink from 'components/StyledLink'

describe('<Logo />', () => {
  it('should render a <h2> tag', () => {
    const renderedComponent = shallow(<Logo />)
    expect(renderedComponent.type()).toEqual('h2')
  })

  it('should render a styled link with icon and title', () => {
    const renderedComponent = shallow(<Logo />)
    const styledLink = renderedComponent.find(StyledLink)

    expect(styledLink).toBeDefined()
    expect(styledLink.contains(<Icon name='university'/>)).toEqual(true)
    expect(styledLink.contains('Readable')).toEqual(true)
  })
})
