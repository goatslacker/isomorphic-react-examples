import React from 'react';
import AltContainer from 'alt/AltContainer'
import LocationStore from '../stores/LocationStore'
import LocationActions from '../actions/LocationActions'

let Locations = React.createClass({

  addFave(e) {
    let location = LocationStore.getLocation( Number(e.target.getAttribute('data-id')));
    LocationActions.favoriteLocation(location);
  },

  render() {

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

module.exports = Locations;
