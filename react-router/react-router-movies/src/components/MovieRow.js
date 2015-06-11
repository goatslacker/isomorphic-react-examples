import React from 'react'

let MovieRow = React.createClass({

  propTypes: {
    movie: React.PropTypes.object
  },

  render() {

    return (
	    <div>
        <h3>{this.props.movie.name}</h3>
        <span>{this.props.movie.description}</span>
        <img src={this.props.movie.image}></img>
	    </div>
    );

  }
})

module.exports = MovieRow