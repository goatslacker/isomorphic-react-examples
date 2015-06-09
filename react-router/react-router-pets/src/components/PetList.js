import React from 'react'
import PetStore from '../stores/PetStore'

var PetList = React.createClass({

  getInitialState() {
    return PetStore.getState()
  },

  render() {

    return (
	    <div>
        <h2>Pets</h2>
		
 		<div>{ this.state.pets}</div>

		<button onClick={this.sayHi}>Say Hi to Pets</button>

	    </div>
    );


  }
})

module.exports = PetList
