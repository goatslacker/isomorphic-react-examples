import express from 'express'
import React from 'react'
import AltIsomorphicElement from './src/components/AltIsomorphicElement'
import Iso from 'iso'
import favicon from 'serve-favicon'
import path from 'path'

let port = 8080
let ip = '127.0.0.1'
let app = express()

app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(favicon(__dirname + '/public/favicon.ico'));

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jade')


// Simulate an asynchronous event to get the initial images
function getImagesFromServer(cb) {
  setTimeout(function () {
    let images = ['/public/img/react-black.png', '/public/img/react-white.png']
    cb(images)
  }, 500)
}


/* just a simple route which displays the product search app */
app.get('/', function (req, res) {


  getImagesFromServer(function (images) {

    var data = {
      ImageStore: {
        images: images
      }
    }

    let node = React.createElement(AltIsomorphicElement, { altStores: data })
    let html = Iso.render(React.renderToString(node), { altStores: data }, { react: true })
    res.render('layout', { html: html })
  });

})


/* logging to the server */
app.listen(port,ip, function() {
  console.log("Go to " + ip + ":" + port)
});
