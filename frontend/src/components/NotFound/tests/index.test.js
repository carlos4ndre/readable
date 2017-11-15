import React from 'react'
import { shallow } from 'enzyme'
import { Grid, Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import NotFound from 'components/NotFound'

describe('<NotFound />', () => {
  it('should render a grid with a header, image and home link', () => {
    const renderedComponent = shallow(<NotFound />)
    const columns = renderedComponent.find(Grid.Column)

    expect(renderedComponent.type()).toEqual(Grid)
    expect(columns).toHaveLength(3)
    expect(columns.at(0).find(Header)).toHaveLength(1)
    expect(columns.at(1).find(Image)).toHaveLength(1)
    expect(columns.at(2).find(Link)).toHaveLength(1)
  })

  it('should have a header with text', () => {
    const renderedComponent = shallow(<NotFound />)
    const columns = renderedComponent.find(Grid.Column)
    const header = columns.at(0).find(Header)

    expect(header.children().text()).toEqual('Not Found')
  })

  it('should have an image of a drunken cat!', () => {
    const renderedComponent = shallow(<NotFound />)
    const columns = renderedComponent.find(Grid.Column)
    const image = columns.at(1).find(Image)

    expect(image.prop('centered')).toEqual(true)
    expect(image.prop('size')).toEqual('big')
    expect(image.prop('src')).toEqual('drunken-cat.jpg')
  })

  it('should have a link to the home page', () => {
    const renderedComponent = shallow(<NotFound />)
    const columns = renderedComponent.find(Grid.Column)
    const link = columns.at(2).find(Link)

    expect(link.prop('to')).toEqual('/')
    expect(link.children().text()).toEqual('Go back to home page')
  })
})
