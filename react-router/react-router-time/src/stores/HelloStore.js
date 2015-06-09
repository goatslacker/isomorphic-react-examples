import alt from '../alt'
import HelloActions from '../actions/HelloActions'

class HelloStore {

  constructor() {

    this.name = 'Nobody'

    this.bindListeners({
      sayHi: HelloActions.SAY_HI
    });

  }

  sayHi(text) {
    console.log('hey there ' + this.name + text)
  }

}

module.exports = alt.createStore(HelloStore, 'HelloStore')

