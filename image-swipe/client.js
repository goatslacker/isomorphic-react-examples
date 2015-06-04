let Iso = require('iso')
let React = require('react')
let AltIsomorphicElement = require('./src/components/AltIsomorphicElement')

Iso.on('react', true, function (props, _, node) {
  React.render(React.createElement(AltIsomorphicElement, props), node)
})
