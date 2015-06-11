import React from 'react'
import PetRow from './PetRow'

let { RouteHandler, Link } = require('react-router')

var PetLinks = React.createClass({

  render() {

    var petLinks = this.props.pets.map(function (p, i) {

      let name = p.name
      return (
        <li key={i}>
          <Link to='petView' params={{name: name}}>
            {`View the awesome: ${name}`}
          </Link>
        </li>
      );

    }.bind(this));

    return (
	    <div>
        <ul>{petLinks}</ul>
	    </div>
    );


  }
})

module.exports = PetLinks
