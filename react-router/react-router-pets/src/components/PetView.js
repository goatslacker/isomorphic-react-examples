import React from 'react'
import PetStore from '../stores/PetStore'
import HelloActions from '../actions/HelloActions'

let PetView = React.createClass({

  getInitialState() {
    return PetStore.getState()
  },

  sayHi() {
  	HelloActions.sayHi(' to the console')
  },

  render() {
    return (
	    <div>
        <h2>{`Pet, ${this.state.pet.name}`}</h2>
        <span>{`Pet, ${this.state.pet.description}`}</span>
		    <button onClick={this.sayHi}>Say Hi to Console</button>
	    </div>
    );

  }
})

module.exports = PetView