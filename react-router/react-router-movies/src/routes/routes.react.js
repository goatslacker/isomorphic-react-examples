import React from 'react'
import ReactRouter from 'react-router'

import App from '../components/controller-views/App'
import Movies from '../components/controller-views/Movies'
import Movie from '../components/controller-views/Movie'

let Route = ReactRouter.Route

let routes = (
  <Route name='home' path='/' handler={App}>
    <Route name='movies' path='/movies' handler={Movies} />
    <Route name='movie' path='/movie/:id?' handler={Movie} />
  </Route>
)

module.exports = routes