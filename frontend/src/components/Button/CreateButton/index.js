import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

class CreateButton  extends Component {
  render() {
    return (
      <Button
        circular
        color='blue'
        content={this.props.content || 'Create'}
        {...this.props}
      />
    )
  }
}

CreateButton.PropTypes = {
  content: PropTypes.string
}

export default CreateButton
