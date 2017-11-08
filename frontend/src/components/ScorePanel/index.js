import React from 'react'
import PropTypes from 'prop-types'
import { List, Icon } from 'semantic-ui-react'

const ScorePanel = (props) => (
  <List>
    <List.Item>
      <Icon
        link
        color='olive'
        name='chevron up'
        onClick={props.onUpVoteClick}
      />
    </List.Item>
    <List.Item>
      {props.value}
    </List.Item>
    <List.Item>
      <Icon
        link
        color='red'
        name='chevron down'
        onClick={props.onDownVoteClick}
      />
    </List.Item>
  </List>
)

ScorePanel.PropTypes = {
  value: PropTypes.number.required
}

export default ScorePanel
