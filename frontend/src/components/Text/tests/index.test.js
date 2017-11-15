import React from 'react'
import { shallow } from 'enzyme'

import Text from 'components/Text'

const text = 'yo! this is a test'
const paddedText = `  ${text}  `

describe('<Text />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = shallow(<Text value={text}/>)
    expect(renderedComponent.type()).toEqual('div')
  })

  it('should have a white space style with pre-wrap', () => {
    const renderedComponent = shallow(<Text value={text}/>)
    expect(renderedComponent.prop('style').whiteSpace).toEqual('pre-wrap')
  });

  it('should render text from value props', () => {
    const renderedComponent = shallow(<Text value={text}/>)
    expect(renderedComponent.text()).toEqual(text)
  })

  it('should render text properly trimmed', () => {
    const renderedComponent = shallow(<Text value={paddedText}/>)
    expect(renderedComponent.text()).toEqual(text)
  })
})
