import alt from '../alt'

class LocationActions {
  
  updateLocations(locations) {
    this.dispatch(locations);
  }

  fetchLocations() {
    this.dispatch();
  }

  locationsFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

  favoriteLocation(location) {
    /* simulating a call to ajax method here in an action */
    setTimeout(function () {
      this.dispatch(location);
      console.log('you set a new favorite location')
    }.bind(this), 500)
  }
}

module.exports = alt.createActions(LocationActions);
