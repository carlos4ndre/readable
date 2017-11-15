import React from 'react'
import { shallow } from 'enzyme'
import { Container, Message } from 'semantic-ui-react'
import NoPosts from 'components/NoPosts'

describe('<NoPosts />', () => {
  it('should render a container with a warning message', () => {
    const warningTitle = 'No posts found'
    const warningDescription = "No worries, Let's create some! 🤘💯"
    const renderedComponent = shallow(<NoPosts />)

    expect(renderedComponent.type()).toEqual(Container)
    expect(renderedComponent.find(Message.Header).prop('children')).toEqual(warningTitle)
    expect(renderedComponent.find('span').prop('children')).toEqual(warningDescription)
  })
})
