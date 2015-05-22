import React from 'react'
import TimeActions from '../actions/TimeActions'
import TimeStore from '../stores/TimeStore'

class DateTimeComponent extends React.Component {

  constructor() {
    this.state = TimeStore.getState()
  }

  componentDidMount() {
    TimeStore.listen(() => this.setState(TimeStore.getState()))
  }

  componentWillUnmount() {
    TimeStore.unlisten(() => this.setState(TimeStore.getState()))
  }

  updateTime() {
    TimeActions.updateTime(Date.now())
  }

  render() {
    return (
      <div>
        <span>Unique id from the server:</span>
        <span>{ `${this.state.asyncValue}` }</span>
        <br/>
        <button onClick={this.updateTime}>Click to update time</button>
        <span>{ `${this.state.time}` }</span>
      </div>
    )
  }
}

module.exports = DateTimeComponent
