import React from 'react'

let { RouteHandler, Link } = require('react-router')

let MovieLinks = React.createClass({

  propTypes: {
    movies: React.PropTypes.object
  },

  render() {

    let movieLinks = this.props.movies.map(function (m, i) {

      let name = m.name
      return (
        <li key={i}>
          <Link to='movieView' params={{name: name}}>
            {`View the movie: ${name}`}
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
