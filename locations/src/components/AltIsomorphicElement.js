import React from 'react'
import alt from '../alt'
import AltContainer from 'alt/AltContainer'
import IsomorphicMixin from 'alt/mixins/IsomorphicMixin'

import Locations from './Locations'
import LocationStore from '../stores/LocationStore'
import Favorites from './Favorites'
import FavoritesStore from '../stores/FavoritesStore'


module.exports = React.createClass({
  mixins: [IsomorphicMixin.create(alt)],

  render: function () {

    return (
		<div>
	        <h1>Locations</h1>
	        <AltContainer store={LocationStore}>
	          <Locations />
	        </AltContainer>

	        <h1>Favorites</h1>
	        <AltContainer store={FavoritesStore}>
	          <Favorites />
	        </AltContainer>
      	</div>
    );
  }

})
