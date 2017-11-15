import React from 'react'
import { mount } from 'enzyme'
import DateFormat from 'components/DateFormat'

describe('<DateFormat />', () => {
  it('should render a formatted date from unix timestamp', () => {
    const timestamp = 1510774885
    const expected = '15/11/2017'
    const renderedComponent = mount(<DateFormat timestamp={timestamp}/>)
    expect(renderedComponent.text()).toEqual(expected)
  })
})
