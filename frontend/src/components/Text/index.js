import React from 'react'
import PropTypes from 'prop-types'

const Text = (props) => (
  <div style={{whiteSpace: 'pre-wrap'}}>
      {props.value && props.value.trim()}
  </div>
)

Text.PropTypes = {
  value: PropTypes.string.required
}

export default Text
