/* 
   Simulate an asynchronous event that takes 500ms to complete 
   Could return a promiseee...
*/

let petData = [ 
    {name: 'darkdog', description: ' is a very scary dog', image: '/public/img/darkdog.png'},
    {name: 'winston', description: ' is a fluffy dog', image: '/public/img/winston.png'}, 
    {name: 'chaplin', description: ' is a red dog', image: '/public/img/chaplin.png'}, 
    {name: 'bennie', description: ' is a cool dog', image: '/public/img/bennie.png'} 
  ]

let pets = {

  findPet: function(petName, cb) {
    let pet = '';

    for (let p of petData) {
      if (p.name.toLowerCase() === petName.toLowerCase()) {
        this.pet = p
        break;
      }
    }

    setTimeout(function () {
      cb(this.pet)
    }.bind(this), 200)

  },

  findAllPets: function(cb) {
    setTimeout(function () {
      cb(petData)  
    }.bind(this), 200)

  }

}

module.exports = pets