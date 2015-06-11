import React from 'react'
let { RouteHandler, Link } = require('react-router')

let MovieLinks = React.createClass({

  propTypes: {
    movies: React.PropTypes.array
  },

  render() {

    let movieLinks = this.props.movies.map(function (m, i) {

      return (
        <li key={i}>
          <Link to='movie' params={{id: m.id }}>
            {`View the movie: ${m.name}`}
          </Link>
        </li>
      );

    }.bind(this));

    return (
	    <div>
        <ul>{movieLinks}</ul>
	    </div>
    );

  }
})

module.exports = MovieLinks