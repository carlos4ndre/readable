import React from 'react'
import PropTypes from 'prop-types'

const Text = (props) => (
  <div style={{whiteSpace: 'pre-wrap'}}>
      {props.value.trim()}
  </div>
)

Text.PropTypes = {
  children: PropTypes.object.required
}

export default Text
