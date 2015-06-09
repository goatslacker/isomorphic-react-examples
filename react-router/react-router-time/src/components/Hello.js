import React from 'react'
import HelloStore from '../stores/HelloStore'
import HelloActions from '../actions/HelloActions'

let App = React.createClass({

  getInitialState() {
    return HelloStore.getState()
  },

  sayHi() {
  	HelloActions.sayHi(' to the console')
  },

  render() {
    return (
	    <div>
	    	<span>{`Hello, ${this.state.name}`}</span>
		    <button onClick={this.sayHi}>Say Hi to Console</button>
	    </div>
    );

  }
})

module.exports = App
