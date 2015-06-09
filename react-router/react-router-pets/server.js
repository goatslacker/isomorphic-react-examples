import Router from 'react-router'
import React from 'react'
import express from 'express'
import Iso from 'iso'
import favicon from 'serve-favicon'
import path from 'path'


import routes from './src/routes'
import alt from './src/alt'
import PetApi from './src/api/pets'

let port = 8080
let ip = '127.0.0.1'
let app = express()

app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'templates'))
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(favicon(__dirname + '/public/favicon.ico'));


function getNameFromServer(cb) {
  setTimeout(function () {
    cb('Server')
  }, 300)
}



/* 
  Prior to running react-router we setup this route in order to handle data fetching. 
  We can pass data fetched via express' locals.
*/


app.get('/', function (req, res, next) {

  console.log('home loaded from express')

  // call to pre load pets ...
  let pets = PetApi.findAllPets()
  res.locals.data = { PetStore: { pets: pets } }
  next()
  
})



app.get('/pets/:name?', function (req, res, next) {

  console.log('pets loaded from express')
  
  // pet names
  if (req.params.name) {

    // call to pre load pets ...
    let pets = PetApi.findAllPets()

    // call to bring detailed information on individual pet
    let pet = PetApi.findPet('Winston')

    res.locals.data = { PetStore: { pet: pet, pets: pets } }
    next()

  } else {

    // call to pre load pets ...
    let pets = PetApi.findAllPets()
    res.locals.data = { PetStore: { pets: pets } }
    next()
  }
})



/*
  This is where the magic happens...
*/
app.use(function (req, res) {

  // We take the locals data we have fetched and seed our stores with data
  alt.bootstrap(JSON.stringify(res.locals.data || {}))
  let iso = new Iso()

  // We use react-router to run the URL that is provided in routes.jsx

  Router.run(routes, req.url, function (Handler) {
    let content = React.renderToString(React.createElement(Handler))

    // Use iso to render, picks back up on the client side and bootstraps the stores.
    iso.add(content, alt.flush())
    res.render('layout', { html: iso.render() })

  })
})


/* logging to the server */
app.listen(port,ip, function() {
  console.log("Go to " + ip + ":" + port)
});