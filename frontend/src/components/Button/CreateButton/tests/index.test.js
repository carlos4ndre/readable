import React from 'react'
import { shallow } from 'enzyme'
import { Button } from 'semantic-ui-react'
import CreateButton from 'components/Button/CreateButton'

describe('<CreateButton />', () => {
  it('should render a button', () => {
    const container = shallow(<CreateButton />)
    expect(container.type()).toEqual(Button)
    expect(container.prop('circular')).toEqual(true)
    expect(container.prop('color')).toEqual('blue')
    expect(container.prop('content')).toEqual('Create')
  })

  it('should allow custom button name', () => {
    const buttonName = 'Create Stuff'
    const container = shallow(<CreateButton content={buttonName}/>)
    expect(container.prop('content')).toEqual(buttonName)
  })
})
