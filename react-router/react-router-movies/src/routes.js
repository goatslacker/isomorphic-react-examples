import React from 'react'
import ReactRouter from 'react-router'

import App from './components/App'
import MovieList from './components/MovieList'
import MovieView from './components/MovieView'

let Route = ReactRouter.Route

let routes = (
  <Route name='home' path='/' handler={App}>
    <Route name='movieList' path='/movies' handler={MovieList} />
    <Route name='movieView' path='/movies/:name?' handler={MovieView} />
  </Route>
)

module.exports = routes