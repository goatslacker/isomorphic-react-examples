import alt from '../alt'

class TimeStore {

  constructor() {
	this.time = Date.now()
  }

}

module.exports = alt.createStore(TimeStore, 'TimeStore')