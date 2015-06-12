import alt from '../alt'
import MovieApi from '../api/movies'

class MovieActions {
  
  sayHi(name) {
    this.dispatch(name);
  }

  setMovie(id) {

  	// call out to your movie api in the action
    MovieApi.findMovie(id)
      .then ( function (movie) {
      
        let data = { MovieStore: { movie: movie } }
      
        /* not sure if it is best to bootstrap here or just send to the store */
        alt.bootstrap(JSON.stringify(data || {}))
	      this.dispatch(movie);

    }.bind(this), function(error) {
      console.error("Failed!", error);
    });

  }

}

module.exports = alt.createActions(MovieActions);