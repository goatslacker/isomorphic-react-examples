let React = require('react')
let ImageActions = require('../../actions/ImageActions')
let ImageStore = require('../../stores/ImageStore')

// just a simple swiping component
let Swipr = require('react-swipr')

class Images extends React.Component {

  constructor() {
    this.state = ImageStore.getState()
  }

  componentDidMount() {
    ImageStore.listen(() => this.setState(ImageStore.getState()))
  }

  componentWillUnmount() {
    ImageStore.unlisten(() => this.setState(ImageStore.getState()))
  }

  updateImages() {
    ImageActions.updateImages()
  }

  render() {

    let rows = null;

    if(this.state.images !== undefined){

      rows = this.state.images.map(function(image, i) {
          return (
            <li className="row">
              <img src={image} alt="" />
            </li>
          );
      })
    }

    return (
      <div id="images">
        <button onClick={this.updateImages}>switch  images</button>
        <Swipr elementId="image-swipr">
          {rows}
        </Swipr>
      </div>
    )
  }
}

module.exports = Images
