import React from 'react'
import { shallow } from 'enzyme'
import { Menu, Search } from 'semantic-ui-react'
import Header from 'components/Header'
import Logo from 'components/Logo'
import StyledLink from 'components/StyledLink'

describe('<Header />', () => {
  const categories = [
    {name: 'anime', path: 'anime'},
    {name: 'gaming', path: 'gaming'}
  ]

  it('should render a menu with home and categories links and search button', () => {
    const renderedComponent = shallow(<Header categories={categories}/>)
    expect(renderedComponent.type()).toEqual(Menu)

    const items = renderedComponent.find(Menu.Item)
    expect(items).toHaveLength(4)
    expect(items.at(0).children().type()).toEqual(Logo)
    expect(items.at(1).children().type()).toEqual(StyledLink)
    expect(items.at(2).children().type()).toEqual(StyledLink)
    expect(items.at(3).children().type()).toEqual(Search)
  })
})
