import Router from 'react-router'
import React from 'react'
import express from 'express'
import Iso from 'iso'
import favicon from 'serve-favicon'
import path from 'path'

import expressRoutes from './src/routes/routes.express'
import reactRoutes from './src/routes/routes.react'
import alt from './src/alt'

let port = 8080
let ip = '127.0.0.1'
let app = express()

app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'templates'))
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(favicon(__dirname + '/public/favicon.ico'));


/* routing from express, we pass data fetched via express' locals */
expressRoutes(app);


/* Kick off react routing */
app.use(function (req, res) {

  // take the locals data we have fetched and seed our stores with data
  alt.bootstrap(JSON.stringify(res.locals.data || {}))
  let iso = new Iso()

  // react-router runs the URL that is provided in reactRoutes

  Router.run(reactRoutes, req.url, function (Handler) {
    // Use iso to render, picks back up on the client side and bootstraps the stores.
    let node = React.renderToString(React.createElement(Handler))
    iso.add(node, alt.flush())
    res.render('layout', { html: iso.render() })

  })
})


/* logging to the server */
app.listen(port,ip, function() {
  console.log("Go to " + ip + ":" + port)
});