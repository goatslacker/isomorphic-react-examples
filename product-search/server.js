import express from 'express'
import React from 'react'
import AltIsomorphicElement from './src/components/AltIsomorphicElement'
import Iso from 'iso'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import favicon from 'serve-favicon'
import path from 'path'

let port = 8080
let ip = '127.0.0.1'
let app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(favicon(__dirname + '/public/favicon.ico'));

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jade')


/* Simulate an asynchronous event to retrieve products from storage. */
function getProductsFromServer(cb) {
  setTimeout(function () {

    let mockData = [
      {name: 'Football', category: 'Sporting Goods', price: '$49.99', stocked: true, visible: true},
      {name: 'Basketball', category: 'Sporting Goods', price: '$29.99', stocked: false, visible: true},
      {name: 'iPhone 5', category: 'Electronics', price: '$399.99', stocked: false, visible: true},
      {name: 'Nexus 7', category: 'Electronics', price: '$199.99', stocked: true, visible: true}
    ];
    
    cb(mockData)

  }, 500)
}


/* just a simple route which displays the product search app */
app.get('/', function (req, res) {

   getProductsFromServer( function (products) {
    
    let data = {
      ProductStore: {
        products: products
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
