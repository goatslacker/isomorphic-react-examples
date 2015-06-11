import React from 'react'
import PetStore from '../stores/PetStore'
import PetActions from '../actions/PetActions'
import PetRow from './PetRow'

let PetView = React.createClass({

  getInitialState() {
    return PetStore.getState()
  },

  initializePet (petName) {
    PetActions.setPet(petName)
  },

  componentDidMount() {
    // pet name params passed through fine on component mount
    this.initializePet(this.props.params.name)
    PetStore.listen(() => this.setState(PetStore.getState()))
  },

  componentWillUnmount() {
    PetStore.unlisten(() => this.setState(PetStore.getState()))
  },

  componentWillReceiveProps(nextProps) {
    /* 
      When changing to a new route with the same controller view
      the component does not re-mount. We need to detect the new params here
    */
    this.initializePet(nextProps.params.name)
    PetStore.listen(() => this.setState(PetStore.getState()))
  },

  sayHiPet() {
  	PetActions.sayHi('Hello from you favorite pet: ')
  },

  render() {
    return (
	    <div>
        <h2>{`Hello , ${this.state.pet.name}`}</h2>
        <PetRow pet={this.state.pet} />
		    <button onClick={this.sayHiPet}>Say Hi to Console</button>
	    </div>
    );

  }
})

module.exports = PetView