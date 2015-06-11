import React from 'react'
import PetStore from '../stores/PetStore'
import PetRow from './PetRow'

var PetList = React.createClass({

  getInitialState() {
    return PetStore.getState()
  },


  render() {

    var petList = this.state.pets.map(function (p, i) {

      return (
        <PetRow key={i} pet={p} />
      );

    }.bind(this));

    return (
      <div>
        <h2>Pet List</h2>
        <span>{petList}</span>
      </div>
    );
  }

})

module.exports = PetList
