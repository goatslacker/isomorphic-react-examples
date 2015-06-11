import Router from 'react-router'
import React from 'react'
import express from 'express'
import Iso from 'iso'
import favicon from 'serve-favicon'
import path from 'path'


import routes from './src/routes'
import alt from './src/alt'
import MovieApi from './src/api/movies'

let port = 8080
let ip = '127.0.0.1'
let app = express()

app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'templates'))
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(favicon(__dirname + '/public/favicon.ico'));



/* 
  Prior to running react-router we setup this route in order to handle data fetching. 
  We can pass data fetched via express' locals.
*/


app.get('/', function (req, res, next) {

  console.log('home loaded from express')

  // call to pre load movies ...
  MovieApi.findAllMovies(function (movies){
    res.locals.data = { MovieStore: { movies: movies } }
    next()
  })
  
})


app.get('/movies/:name?', function (req, res, next) {

  console.log('movies loaded from express')
  
  // movie name
  if (req.params.name) {

    // call to pre load movies ...
    MovieApi.findAllMovies(function (movies){

      // call to bring detailed information on an individual movie
      MovieApi.findMovie(req.params.name, function (movie) {
        res.locals.data = { MovieStore: { movie: movie, movies: movies } }
        next()
      })
    })

  } else {

    // call to pre load movies ...
    MovieApi.findAllMovies(function (movies){
      res.locals.data = { MovieStore: { movies: movies } }
      next()
    })

  }

})


/*
  This is where the magic happens...
*/
app.use(function (req, res) {

  /* 
    We take the locals data we have fetched and seed our stores with data
    Makes sure that your components have the proper data
  */
  alt.bootstrap(JSON.stringify(res.locals.data || {}))
  let iso = new Iso()

  // Use react-router to run the URL that is provided in routes.js

  Router.run(routes, req.url, function (Handler) {
    let node = React.renderToString(React.createElement(Handler))

    /* 
      alt.flush() once the view markup has been created. 
      resets your stores so they are ready for the next request. 
    */
    iso.add(node, alt.flush())

    // Use iso to render, picks back up on the client side and bootstraps the stores.
    res.render('layout', { html: iso.render() })

  })
})


/* logging to the server */
app.listen(port,ip, function() {
  console.log("Go to " + ip + ":" + port)
});