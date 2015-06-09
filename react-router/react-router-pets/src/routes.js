import React from 'react'
import ReactRouter from 'react-router'

import App from './components/App'
import PetList from './components/PetList'
import PetView from './components/PetView'

let Route = ReactRouter.Route

let routes = (
  <Route name='home' path='/' handler={App}>
    <Route name='pets' path='/pets' handler={PetList} />
    <Route name='petsName' path='/pets/:name?' handler={PetView} />
  </Route>
)

module.exports = routes
