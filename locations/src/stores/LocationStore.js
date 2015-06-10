import alt from '../alt'
import LocationActions from '../actions/LocationActions'
import FavoritesStore from './FavoritesStore'

class LocationStore {

  constructor() {
    this.locations = [];

    this.bindListeners({
      handleUpdateLocations: LocationActions.UPDATE_LOCATIONS,
      handleFetchLocations: LocationActions.FETCH_LOCATIONS,
      setFavorites: LocationActions.FAVORITE_LOCATION
    });

    this.exportPublicMethods({
      getLocation: this.getLocation
    });
  }

  handleUpdateLocations(locations) {
    this.locations = locations
  }

  handleFetchLocations() {
    this.locations = []
  }

  resetAllFavorites() {
    this.locations = this.locations.map((location) => {
      return {
        id: location.id,
        name: location.name,
        has_favorite: false
      };
    });
  }

  setFavorites(location) {
    this.waitFor(FavoritesStore)
    let favoritedLocations = FavoritesStore.getState().locations
    this.resetAllFavorites()

    favoritedLocations.forEach((location) => {
      // find each location in the array and set favorite to true
      for (let i = 0; i < this.locations.length; i += 1) {
        if (this.locations[i].id === location.id) {
          this.locations[i].has_favorite = true
          break
        }
      }
    });
  }

  getLocation(id) {
    let { locations } = this.getState();
    for (let i = 0; i < locations.length; i += 1) {
      if (locations[i].id === id) {
        return locations[i]
      }
    }
    return null;
  }
}

module.exports = alt.createStore(LocationStore, 'LocationStore');