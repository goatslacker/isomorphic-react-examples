import React from 'react'
import MovieStore from '../../stores/MovieStore'
import MovieRow from '../MovieRow'

var MovieList = React.createClass({

  getInitialState() {
    return MovieStore.getState()
  },

  render() {

    var movieList = this.state.movies.map(function (m, i) {

      return (
        <MovieRow key={i} movie={m} />
      );

    }.bind(this));

    return (
      <div>

        <h2>Movie List</h2>
        <span>{movieList}</span>
      </div>
    );
  }

})

module.exports = MovieList
