import React from 'react'

let PetRow = React.createClass({

  propTypes: {
    pet: React.PropTypes.object
  },

  render() {

    return (
	    <div>
        <h3>{this.props.pet.name}</h3>
        <span>{this.props.pet.description}</span>
        <img src={this.props.pet.image}></img>
	    </div>
    );

  }
})

module.exports = PetRow