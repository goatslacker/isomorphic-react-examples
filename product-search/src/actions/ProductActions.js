import alt from '../alt'

class ProductActions {
  
  filterProducts(text) {
    this.dispatch(text);
  }

}

module.exports = alt.createActions(ProductActions);