import React from 'react'
import alt from '../alt'
import IsomorphicMixin from 'alt/mixins/IsomorphicMixin'
import DateTimeComponent from './DateTimeComponent'

module.exports = React.createClass({
  mixins: [IsomorphicMixin.create(alt)],

  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(DateTimeComponent)
    )
  }
})
