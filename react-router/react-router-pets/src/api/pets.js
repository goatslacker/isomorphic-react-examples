
/* Simulate an asynchronous event that takes 300ms to complete */
//
// TODO: Lets make this a promiseee...
//


let pets = {

  pets: [ 
    {name: 'DARK DOG', description: 'DARK DOG is sooo Dark'},
    {name: 'Winston', description: 'Winston is a fluffy dog'}, 
    {name: 'Chaplin', description: 'Chaplin is a skinny dog'}, 
    {name: 'Bennie', description: 'Bennie is a cool dog'} 
  ],


  findPet: function(petName) {
    let pet = '';

    for (let p of this.pets) {
      if (p.name.toLowerCase() === petName.toLowerCase()) {
        this.pet = p
        break;
      }
    }

    return this.pet
  },

  findAllPets: function() {
    return pets  
  }

}

module.exports = pets