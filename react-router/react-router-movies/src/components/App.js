import React from 'react'
import MovieLinks from './MovieLinks'
import MovieStore from '../stores/MovieStore'

let { RouteHandler, Link } = require('react-router')

let App = React.createClass({

  getInitialState() {
    return MovieStore.getState()
  },

  render() {

    return (
      <div>

        {/* links */}
        <Link to='movieList'>All movie details</Link>

        <MovieLinks movies={this.state.movies} />
        
        {/* route */}
        <RouteHandler {...this.props} />

      </div>
    )
  }
})

module.exports = App