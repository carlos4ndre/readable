import React from 'react'
import sinon from 'sinon'
import { shallow, mount } from 'enzyme'
import { Dropdown } from 'semantic-ui-react'
import SortBy from 'components/SortBy'

describe('<SortBy />', () => {
  it('should render a dropdown', () => {
    const renderedComponent = shallow(<SortBy />)
    const selectOptions = [
      {'key': 1, 'text': 'Top', 'value': 'Top'},
      {'key': 2, 'text': 'Latest', 'value': 'Latest'},
      {'key': 3, 'text': 'Comments', 'value': 'Comments'}
    ]

    expect(renderedComponent.type()).toEqual(Dropdown)
    expect(renderedComponent.prop('selection')).toEqual(true)
    expect(renderedComponent.prop('compact')).toEqual(true)
    expect(renderedComponent.prop('text')).toEqual('Sort By')
    expect(renderedComponent.prop('defaultValue')).toEqual('Top')
    expect(renderedComponent.prop('options')).toEqual(selectOptions)
  })

  it('should expose onChange events', () => {
    const onChange = sinon.spy();
    const renderedComponent = mount(<SortBy onChange={onChange}/>)

    renderedComponent.simulate('change')
    expect(onChange.calledOnce).toEqual(true)
  })
})
