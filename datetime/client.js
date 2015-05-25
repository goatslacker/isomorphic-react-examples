import Iso from 'iso'
import React from 'react'
import AltIsomorphicElement from './src/components/AltIsomorphicElement'

Iso.on('react', true, function (props, _, node) {
  React.render(React.createElement(AltIsomorphicElement, props), node)
})
