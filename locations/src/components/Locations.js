import React from 'react';
import AltContainer from 'alt/AltContainer'
import LocationStore from '../stores/LocationStore'
import FavoritesStore from '../stores/FavoritesStore'
import LocationActions from '../actions/LocationActions'

let Favorites = React.createClass({
  render() {
    return (
      <ul>
        {this.props.locations.map((location, i) => {
          return (
            <li key={i}>{location.name}</li>
          );
        })}
      </ul>
    );
  }
});

let AllLocations = React.createClass({
  addFave(ev) {
    let location = LocationStore.getLocation(
      Number(ev.target.getAttribute('data-id'))
    );
    LocationActions.favoriteLocation(location);
  },

  render() {
    if (LocationStore.hasError()) {
      return (
        <div>Something is wrong</div>
      );
    }

    if (LocationStore.isLoading()) {
      return (
        <div>
          <img src="/public/img/ajax-loader.gif" />
        </div>
      )
    }

    return (
      <ul>
        {this.props.locations.map((location, i) => {
          var faveButton = (
            <button onClick={this.addFave} data-id={location.id}>
              Favorite
            </button>
          );

          return (
            <li key={i}>
              {location.name} {location.has_favorite ? '<3' : faveButton}
            </li>
          );
        })}
      </ul>
    );
  }
});

let Locations = React.createClass({
  componentDidMount() {
    LocationStore.fetchLocations();
  },

  render() {
    return (
      <div>
        <h1>Locations</h1>
        <AltContainer store={LocationStore}>
          <AllLocations />
        </AltContainer>

        <h1>Favorites</h1>
        <AltContainer store={FavoritesStore}>
          <Favorites />
        </AltContainer>
      </div>
    );
  }
});

module.exports = Locations;
