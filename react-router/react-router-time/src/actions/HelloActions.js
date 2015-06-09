import alt from '../alt'

class HelloActions {
  
  sayHi(name) {
    this.dispatch(name);
  }

}

module.exports = alt.createActions(HelloActions);