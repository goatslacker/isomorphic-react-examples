var alt = require('../alt')

class ImageActions {

  constructor() {
    this.generateActions('updateImages')
  }

  updateImages() {
    this.dispatch(images);
  }

}

module.exports = alt.createActions(ImageActions)
