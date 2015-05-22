import express from 'express'
import React from 'react'
import AltIsomorphicElement from './src/components/AltIsomorphicElement'
import Iso from 'iso'

/* express boilerplate */
let app = express()
let port = 8080;
let ip = '127.0.0.1';
let path = require('path')
app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'templates'))
app.use('/public', express.static(path.join(__dirname, 'public')))


/* Simulate an asynchronous event to retrieve the time from storage. */
function getTimeFromServer(cb) {
  setTimeout(function () {
    cb(Date.now())
  }, 250)
}

/* 
  Our simple route, we retrieve the time from our asynchronous system
  seed the stores with data and render the html using iso and jade. 
*/
app.get('/', function (req, res) {
  getTimeFromServer(function (time) {
    let rand = Math.random()

    let data = {
      TimeStore: {
        time: time,
        asyncValue: rand
      }
    }

    let node = React.createElement(AltIsomorphicElement, {
      altStores: data
    })

    res.render('layout', {
      html: Iso.render(React.renderToString(node), { altStores: data }, { react: true })
    })
  })
})

/* logging to the server */
app.listen(port,ip, function() {
  console.log("Go to " + ip + ":" + port);
});
