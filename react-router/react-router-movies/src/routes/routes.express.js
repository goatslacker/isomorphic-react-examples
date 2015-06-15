import MovieApi from '../api/movies'

module.exports = function(app) {

  /* home route */
  app.get('/', function (req, res, next) {

    console.log('home route loaded from express')

    // call to pre load movies ...
    MovieApi.findAllMovies()
      .then( function (movies){
        res.locals.data = { MovieStore: { movies: movies } }
        next()
    })
  })


  /* movie list route */

  app.get('/movies', function (req, res, next) {

    console.log('movie list route loaded from express')

      // call to pre load movies ...
      MovieApi.findAllMovies()
        .then( function (movies){
          res.locals.data = { MovieStore: { movies: movies } }
        next()
      })
  })
  

  /* movie route */
  app.get('/movie/:id', function (req, res, next) {

    console.log('movie route loaded from express')
    
    // movie name
    if (!req.params.id) {
      next()
    }

    /* 
      call to pre load movies ...
      then call to bring detailed information on an individual movie
    */
    let data = { MovieStore: { movie: {}, movies: [] } }

    MovieApi.findAllMovies()
    .then( function (movies){
      data.MovieStore.movies = movies
      return MovieApi.findMovie(req.params.id)
    }).then(function(movie){
      data.MovieStore.movie = movie
      res.locals.data = data
      next()
    }).catch(function(error) {
      console.log('got to error')
      next()
    });

  })

};