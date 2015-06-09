require('node-jsx').install({ extension: '.jsx', harmony: true })

var Router = require('react-router')
var React = require('react')
var express = require('express')
var Iso = require('iso')
var favicon = require('serve-favicon')
var path = require('path')

var routes = require('./src/routes')
var alt = require('./src/alt')

var port = 8080
var ip = '127.0.0.1'
var app = express()

app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'templates'))
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(favicon(__dirname + '/public/favicon.ico'));


/* Simulate an asynchronous event that takes 300ms to complete */
function getNameFromServer(cb) {
  setTimeout(function () {
    cb('Server')
  }, 300)
}

/* 
  Prior to running react-router we setup this route in order to handle data fetching. 
  We can pass data fetched via express' locals.
*/
app.get('/hello/:name?', function (req, res, next) {
  if (req.params.name) {
    res.locals.data = { HelloStore: { name: req.params.name } }
    next()
  } else {
    getNameFromServer(function (name) {
      res.locals.data = {
        HelloStore: { name: name }
      }
      next()
    })
  }
})

app.get('/time', function (req, res, next) {
  res.locals.data = {
    TimeStore: { time: Date.now() }
  }
  next()
})

/*
  This is where the magic happens...
*/
app.use(function (req, res) {

  // We take the locals data we have fetched and seed our stores with data
  alt.bootstrap(JSON.stringify(res.locals.data || {}))
  var iso = new Iso()

  // We use react-router to run the URL that is provided in routes.jsx

  Router.run(routes, req.url, function (Handler) {
    var content = React.renderToString(React.createElement(Handler))

    // Use iso to render, it picks back up on the client side and bootstraps the stores.

    iso.add(content, alt.flush())
    res.render('layout', { html: iso.render() })

  })
})


/* logging to the server */
app.listen(port,ip, function() {
  console.log("Go to " + ip + ":" + port)
});
