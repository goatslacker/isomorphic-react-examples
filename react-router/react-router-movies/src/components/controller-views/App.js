import React from 'react'
import MovieStore from '../../stores/MovieStore'
import MovieLinks from '../MovieLinks'

let { RouteHandler, Link } = require('react-router')

let App = React.createClass({

  getInitialState() {
    return MovieStore.getState()
  },

  render() {

    return (
      <div>

        {/* links */}
        <Link to='movies'>All movies</Link>

        <MovieLinks movies={this.state.movies} />

        {/* route */}
        <RouteHandler {...this.props} />

      </div>
    )
  }
})

module.exports = App