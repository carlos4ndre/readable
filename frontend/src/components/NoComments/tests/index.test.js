import React from 'react'
import { shallow } from 'enzyme'
import { Container, Message } from 'semantic-ui-react'
import NoComments from 'components/NoComments'

describe('<NoComments />', () => {
  it('should render a container with a warning message', () => {
    const warningTitle = 'No comments! What?'
    const warningDescription = "Don't be shy! Go ahead and share your thoughts 🖖"
    const renderedComponent = shallow(<NoComments />)

    expect(renderedComponent.type()).toEqual(Container)
    expect(renderedComponent.find(Message.Header).prop('children')).toEqual(warningTitle)
    expect(renderedComponent.find('span').prop('children')).toEqual(warningDescription)
  })
})
