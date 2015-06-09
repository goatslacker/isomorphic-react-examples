import alt from '../alt'

class PetStore {

  constructor() {
	this.pets = []
    this.pet = {name: 'NO DOG', description: 'No dog description'}

  }

}

module.exports = alt.createStore(PetStore, 'PetStore')