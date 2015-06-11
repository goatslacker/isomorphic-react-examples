import React from 'react'

let { RouteHandler, Link } = require('react-router')

let MovieRow = React.createClass({

  propTypes: {
    movie: React.PropTypes.object
  },

  render() {

    return (
	    <div>
        <h3>{this.props.movie.name}</h3>
        <span>{this.props.movie.description}</span>
        
        <Link to='movie' params={ { id: this.props.movie.id } }>
          <img src={this.props.movie.image}></img>
        </Link>

	    </div>
    );

  }
})

module.exports = MovieRow