import React from 'react'
import ReactRouter from 'react-router'
import App from './components/App'
import Hello from './components/Hello'
import Time from './components/Time'

let Route = ReactRouter.Route

let routes = (
  <Route name='home' path='/' handler={App}>
    <Route name='hello' path='/hello/:name?' handler={Hello} />
    <Route name='time' path='/time' handler={Time} />
  </Route>
)

module.exports = routes
