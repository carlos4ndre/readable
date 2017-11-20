import React from 'react'
import { mount } from 'enzyme'
import DateFormat from 'components/DateFormat'

describe('<DateFormat />', () => {
  it('should render a formatted date from unix timestamp', () => {
    const timestamp = 1467166872634
    const expected = '29/06/2016'
    const renderedComponent = mount(<DateFormat timestamp={timestamp}/>)
    expect(renderedComponent.text()).toEqual(expected)
  })
})
