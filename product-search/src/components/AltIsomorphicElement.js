import React from 'react'
import alt from '../alt'
import IsomorphicMixin from 'alt/mixins/IsomorphicMixin'
import AltContainer from 'alt/AltContainer'

import ProductList from './controller-views/ProductList'
import ProductStore from '../stores/ProductStore'

module.exports = React.createClass({
  mixins: [IsomorphicMixin.create(alt)],

  render: function () {

    return (
     <AltContainer store={ProductStore}>
      <ProductList />
     </AltContainer>
    );
  }

})
