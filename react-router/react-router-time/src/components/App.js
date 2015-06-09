import React from 'react'
let { RouteHandler, Link } = require('react-router')

let App = React.createClass({
  render() {
    return (
      <div>
        <Link to='hello'>Say hi</Link>
        <br />
        <Link to='time'>What time is it?</Link>
        <br />
        <RouteHandler {...this.props} />
      </div>
    )
  }
})

module.exports = App