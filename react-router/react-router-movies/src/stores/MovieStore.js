import alt from '../alt'
import MovieActions from '../actions/MovieActions'

class MovieStore {

  constructor() {
	  this.movies = []
    this.movie = {}

    this.bindListeners({
      sayHi: MovieActions.SAY_HI,
      setPet: MovieActions.SET_PET 
    });

  }

  sayHi(name) {
  	/* not sure what this method does... could update a message  */
  }

  setPet(pet) {
  	/* maybe update the current pet... */
  }


}

module.exports = alt.createStore(MovieStore, 'MovieStore')