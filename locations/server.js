import express from 'express'
import React from 'react'
import AltIsomorphicElement from './src/components/AltIsomorphicElement'
import Iso from 'iso'
import LocationApi from './src/api/Locations'

/* express boilerplate */
let app = express()
let port = 8080;
let ip = '127.0.0.1';
let path = require('path')
app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'templates'))
app.use('/public', express.static(path.join(__dirname, 'public')))


/* just the one simple route which for now displays our locations */
app.get('/', function (req, res) {

  /* simulate a call to an API to return location data */
  LocationApi.fetch()
    .then((locations) => {
      console.log(locations)
      let data = { LocationStore: {locations: locations} }
      let node = React.createElement(AltIsomorphicElement, { altStores: data })
      let html = Iso.render(React.renderToString(node), { altStores: data }, { react: true })
      res.render('layout', { html: html })

    })

})

/* logging to the server */
app.listen(port,ip, function() {
  console.log("Go to " + ip + ":" + port);
});
