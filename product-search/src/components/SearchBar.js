'use strict'
import React from 'react';
import ProductActions from '../actions/ProductActions'
import Search from 'react-search'

let SearchBar = React.createClass({

  propTypes: {
    names: React.PropTypes.array
  },

  filter(e) {
    ProductActions.filterProducts(e.target.value)
  },

  render() {
    
    return (          
      <form>
        <Search items={this.props.names} onChange={this.filter} />          
      </form>        
    );
  }

});

module.exports = SearchBar;