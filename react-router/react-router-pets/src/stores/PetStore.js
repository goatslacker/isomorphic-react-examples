import alt from '../alt'
import PetActions from '../actions/PetActions'

class PetStore {

  constructor() {
	  this.pets = []
    this.pet = {name: 'NO DOG', description: 'No dog description'}

    this.bindListeners({
      sayHi: PetActions.SAY_HI,
      setPet: PetActions.SET_PET 
    });

  }

  sayHi(name) {
  	/* not sure what this method does... could update a message  */
  }

  setPet(pet) {
  	/* maybe update the current pet... */
  }


}

module.exports = alt.createStore(PetStore, 'PetStore')