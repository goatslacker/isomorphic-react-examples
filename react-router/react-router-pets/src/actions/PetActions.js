import alt from '../alt'
import PetApi from '../api/pets'

class PetActions {
  
  sayHi(name) {
    this.dispatch(name);
  }


  setPet(name) {

  	// call out to your pet api in the action
    PetApi.findPet(name, function (pet) {
      let data = { PetStore: { pet: pet } }
      
      /* not sure if it is best to bootstrap here or just send to the store */
      alt.bootstrap(JSON.stringify(data || {}))
	  this.dispatch(pet);

    }.bind(this))

  }

}

module.exports = alt.createActions(PetActions);