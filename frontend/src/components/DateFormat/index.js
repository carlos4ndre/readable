import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const DATE_FORMAT = 'DD/MM/YYYY'

const DateFormat = ({ timestamp, fromNow = false}) => (
  <Moment format={DATE_FORMAT} fromNow={fromNow}>
    <Moment format={DATE_FORMAT} unix>{timestamp/1000}</Moment>
  </Moment>
)

DateFormat.PropTypes = {
  timestamp: PropTypes.number.required,
  fromNow: PropTypes.bool
}

export default DateFormat
