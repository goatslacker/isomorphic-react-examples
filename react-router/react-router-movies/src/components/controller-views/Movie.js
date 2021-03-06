import React from 'react'
import MovieStore from '../../stores/MovieStore'
import MovieActions from '../../actions/MovieActions'
import MovieRow from '../MovieRow'

let MovieView = React.createClass({

  getInitialState() {
    return MovieStore.getState()
  },

  initMovie (id) {
    MovieActions.setMovie(id)
  },

  componentDidMount() {
    this.initMovie(this.props.params.id)
    MovieStore.listen(() => this.setState(MovieStore.getState()))
  },

  componentWillUnmount() {
    MovieStore.unlisten(() => this.setState(MovieStore.getState()))
  },

  componentWillReceiveProps(nextProps) {
    /* 
      When changing to a new route with the same controller view
      the component does not re-mount. We need to detect the new params here
    */
    this.initMovie(nextProps.params.id)
    MovieStore.listen(() => this.setState(MovieStore.getState()))
  },

  sayHi() {
  	MovieActions.sayHi('Hello from you favorite movie: ')
  },

  render() {
    return (

	    <div>

        <h2>{`Hello , ${this.state.movie.name}`}</h2>
        <MovieRow movie={this.state.movie} />

        { /* TODO Rate movie component ... */}
		    <button onClick={this.sayHi}>Rate Movie</button>

	    </div>
    );

  }
})

module.exports = MovieView