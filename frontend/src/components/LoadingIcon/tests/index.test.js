import React from 'react'
import { shallow } from 'enzyme'
import { Loader } from 'semantic-ui-react'
import LoadingIcon from 'components/LoadingIcon'

describe('<LoadingIcon />', () => {
  it('should render a loader', () => {
    const renderedComponent = shallow(<LoadingIcon />)
    expect(renderedComponent.type()).toEqual(Loader)
  })

  it('should have an active attribute', () => {
    const renderedComponent = shallow(<LoadingIcon />)
    expect(renderedComponent.prop('active')).toBeDefined()
  })

  it('should have a size attribute', () => {
    const renderedComponent = shallow(<LoadingIcon />)
    expect(renderedComponent.prop('size')).toEqual('large')
  })

  it('should have a text', () => {
    const renderedComponent = shallow(<LoadingIcon />)
    expect(renderedComponent.children().text()).toEqual('Loading...')
  })
})
