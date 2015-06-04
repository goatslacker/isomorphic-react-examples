import alt from '../alt'
import ImageActions from '../actions/ImageActions'

class ImageStore {

  constructor() {
    this.images = []
    this.imageType = 'react'

    this.bindActions(ImageActions)
  }

  onUpdateImages(images) {
  	if(this.imageType === 'react'){
      this.setSparklyImages()
  	} else {
      this.setReactImages()
  	}

  }

  setSparklyImages() {
    this.images = ['/public/img/cool.gif', '/public/img/wow.png']
  	this.imageType = 'sparkly'
  }

  setReactImages() {
    this.images = ['/public/img/react-black.png', '/public/img/react-white.png']
  	this.imageType = 'react'
  }

}

module.exports = alt.createStore(ImageStore, 'ImageStore')