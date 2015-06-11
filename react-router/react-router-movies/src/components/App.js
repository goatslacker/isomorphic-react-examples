import React from 'react'
import PetLinks from './PetLinks'
import PetStore from '../stores/PetStore'

let { RouteHandler, Link } = require('react-router')

let App = React.createClass({

  getInitialState() {
    return PetStore.getState()
  },

  render() {

    console.log(this.state)

    return (
      <div>

        {/* links */}
        <Link to='petList'>All Pet details</Link>

        <PetLinks pets={this.state.pets} />

        {/* route */}
        <RouteHandler {...this.props} />

      </div>
    )
  }
})

module.exports = App