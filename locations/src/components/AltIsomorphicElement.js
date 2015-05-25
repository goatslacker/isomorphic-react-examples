import React from 'react'
import alt from '../alt'
import IsomorphicMixin from 'alt/mixins/IsomorphicMixin'
import Locations from './Locations'

module.exports = React.createClass({
  mixins: [IsomorphicMixin.create(alt)],

  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(Locations)
    )
  }
})
