import React from 'react'
import { shallow } from 'enzyme'
import { Button } from 'semantic-ui-react'
import CreateButton from 'components/Button/CreateButton'

describe('<CreateButton />', () => {
  it('should render a button', () => {
    const renderedComponent = shallow(<CreateButton />)
    expect(renderedComponent.type()).toEqual(Button)
    expect(renderedComponent.prop('circular')).toEqual(true)
    expect(renderedComponent.prop('color')).toEqual('blue')
    expect(renderedComponent.prop('content')).toEqual('Create')
  })

  it('should allow custom button name', () => {
    const buttonName = 'Create Stuff'
    const renderedComponent = shallow(<CreateButton content={buttonName}/>)
    expect(renderedComponent.prop('content')).toEqual(buttonName)
  })
})
