import MovieApi from '../api/movies'

module.exports = function(app) {

  /* home route */
  app.get('/', function (req, res, next) {

    console.log('home route loaded from express')

    // call to pre load movies ...
    MovieApi.findAllMovies(function (movies){
      res.locals.data = { MovieStore: { movies: movies } }
      next()
    })

  })

  /* movie list route */

  app.get('/movies', function (req, res, next) {

    console.log('movie list route loaded from express')

      // call to pre load movies ...
      MovieApi.findAllMovies(function (movies){
        res.locals.data = { MovieStore: { movies: movies } }
        next()
      })

  })

  /* movie route */
  app.get('/movie/:id', function (req, res, next) {

    console.log('movie route loaded from express')
    
    // movie name
    if (req.params.id) {

      // call to pre load movies ...
      MovieApi.findAllMovies(function (movies){

        // call to bring detailed information on an individual movie
        MovieApi.findMovie(req.params.id, function (movie) {
          res.locals.data = { MovieStore: { movie: movie, movies: movies } }
          next()
        })
      })
    } else {
      next()      
    }


  })

};