import alt from '../alt'
import LocationActions from '../actions/LocationActions'

class FavoritesStore {

  constructor() {
    this.locations = [];

    this.bindListeners({
      addFavoriteLocation: LocationActions.FAVORITE_LOCATION
    });
  }

  addFavoriteLocation(location) {
    this.locations.push(location);
  }
}

module.exports = alt.createStore(FavoritesStore, 'FavoritesStore');
