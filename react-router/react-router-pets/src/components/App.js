import React from 'react'
let { RouteHandler, Link } = require('react-router')

let App = React.createClass({
  render() {
    return (
      <div>

        {/* links */}
        <Link to='pets'>Pets</Link>
        <br />
        <Link to='petsName'>Pets name</Link>
        <br />

        {/* route */}
        <RouteHandler {...this.props} />

      </div>
    )
  }
})

module.exports = App