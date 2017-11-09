import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { Label } from 'semantic-ui-react'

const DateFormat = (props) => (
  <Label color='grey'>
    <Moment format='DD/MM/YYYY' unix>{props.timestamp/1000}</Moment>
  </Label>
)

DateFormat.PropTypes = {
  timestamp: PropTypes.number.required
}

export default DateFormat
