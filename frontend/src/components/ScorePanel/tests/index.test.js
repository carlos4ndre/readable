import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import { List, Icon } from 'semantic-ui-react'
import ScorePanel from 'components/ScorePanel'

describe('<ScorePanel />', () => {
  const score = '1337'

  it('should render a list with 2 vote buttons and score', () => {
    const renderedComponent = shallow(<ScorePanel value={score}/>)
    const items = renderedComponent.find(List.Item)

    expect(items).toHaveLength(3)
    expect(items.at(0).children().type()).toEqual(Icon)
    expect(items.at(1).children().text()).toEqual(score)
    expect(items.at(2).children().type()).toEqual(Icon)
  })

  it('should have an upvote icon', () => {
    const onClick = sinon.spy()
    const renderedComponent = shallow(<ScorePanel value={score} onUpVoteClick={onClick}/>)
    const items = renderedComponent.find(List.Item)
    const upVote = items.at(0).children()

    expect(upVote.prop('link')).toEqual(true)
    expect(upVote.prop('color')).toEqual('olive')
    expect(upVote.prop('name')).toEqual('chevron up')

    upVote.simulate('click')
    expect(onClick.calledOnce).toEqual(true)
  })

  it('should have a score', () => {
    const renderedComponent = shallow(<ScorePanel value={score}/>)
    const items = renderedComponent.find(List.Item)
    const upVote = items.at(1).children()

    expect(upVote.text()).toEqual(score)
  })

  it('should have an downvote icon', () => {
    const onClick = sinon.spy()
    const renderedComponent = shallow(<ScorePanel value={score} onDownVoteClick={onClick}/>)
    const items = renderedComponent.find(List.Item)
    const upVote = items.at(2).children()

    expect(upVote.prop('link')).toEqual(true)
    expect(upVote.prop('color')).toEqual('red')
    expect(upVote.prop('name')).toEqual('chevron down')

    upVote.simulate('click')
    expect(onClick.calledOnce).toEqual(true)
  })
})
