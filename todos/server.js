import express from 'express'
import React from 'react'
import AltIsomorphicElement from './src/components/AltIsomorphicElement'
import Iso from 'iso'

let port = 8080
let ip = '127.0.0.1'
let app = express()
let path = require('path')
app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jade')


/* Simulate an asynchronous event to retrieve products from storage. */
function getTodosFromServer(cb) {
  setTimeout(function () {

    let mockData = [
      {'text':'Todo 1', 'complete': true}, 
      {'text': 'Todo 2', 'complete': false}
    ];

    cb(mockData)

  }, 500)
}


/* just the one simple route which displays a todo list */
app.get('/', function (req, res) {

   getTodosFromServer( function (todos) {
    
    let data = {
      TodoStore: {
        todos: todos
      }
    }

    let node = React.createElement(AltIsomorphicElement, { altStores: data })

    res.render('layout', {
      html: Iso.render(React.renderToString(node), { altStores: data }, { react: true })
    })

  });

})

/* logging to the server */
app.listen(port,ip, function() {
  console.log("Go to " + ip + ":" + port);
});
