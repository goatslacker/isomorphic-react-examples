import alt from '../alt'
import ProductActions from '../actions/ProductActions'

class ProductStore {

  constructor() {

    this.products = []
    this.filterText = ''

    this.bindListeners({
      filterProducts: ProductActions.FILTER_PRODUCTS
    });

  }


  filterProducts(text) {

    this.filterText = text

    this.products.map(function(product) {
      if( product.name.toLowerCase().includes(this.filterText.toLowerCase()) ){
        product.visible = true
      } else {
        product.visible = false        
      }
    }.bind(this));

  }

}

module.exports = alt.createStore(ProductStore, 'ProductStore');