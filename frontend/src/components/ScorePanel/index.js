import React from 'react'
import { List, Icon } from 'semantic-ui-react'

const ScorePanel = (props) => (
  <List>
    <List.Item>
      <Icon link color='olive' name='chevron up'/>
    </List.Item>
    <List.Item>
      {props.value}
    </List.Item>
    <List.Item>
      <Icon link color='red' name='chevron down'/>
    </List.Item>
  </List>
)

export default ScorePanel
