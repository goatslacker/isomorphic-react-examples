import React from 'react';
import AltContainer from 'alt/AltContainer'

import ProductStore from '../../stores/ProductStore'
import ProductActions from '../../actions/ProductActions'

import TableView from 'react-table-view'
import SearchBar from '../SearchBar.js'


var ProductList = React.createClass({

  filterProducts(filterText) {
    ProductActions.filterProducts();
  },

  render() {

    // define the display for each column for react-table-view
    let columns = {
      name: function(data) {
        if(data.visible){
          let style = {
            color: data.stocked ? "red" : "black"
          };
          return <a href="#" style={style}>{data.name}</a>;
        } 
      },
      category: function(data) {
        if(data.visible){
          return <span>{data.category}</span>
        }
      },
      price: function(data) {
        if(data.visible){
          return <span>{data.price}</span>          
        } 
      },
      visible: function(data) {
          return null;
      }
    }

    // define the names for the search autocomplete
    let names = this.props.products.map(function (product){
      return product.name;
    })

    return (
      <div>

        <SearchBar names={names} />

        <TableView data={this.props.products} columns={columns} />

      </div>
    );
  }

});

module.exports = ProductList;