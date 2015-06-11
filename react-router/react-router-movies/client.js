import Iso from 'iso'
import Router from 'react-router'
import React from 'react'
import reactRoutes from './src/routes/routes.react'
import alt from './src/alt'

/* 
  Once we bootstrap the stores, we run react-router using Router.HistoryLocation
  The element is created and we just render it into the container
*/

Iso.bootstrap(function (state, _, container) {

  // bootstrap the state from the server
  alt.bootstrap(state)

  Router.run(reactRoutes, Router.HistoryLocation, function (Handler, req) {

  	// req.params are passed in as props to the component
  	let node = React.createElement(Handler)
    React.render(node, container)
  })
})