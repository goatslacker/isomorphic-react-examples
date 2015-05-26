'use strict'
import React from 'react';
import TodoActions from '../actions/TodoActions'

let TodoItem = React.createClass({

  propTypes: {
    todo: React.PropTypes.object.isRequired
  },

  render: function() {
    var style = {
      textDecoration: this.props.todo.complete ? "line-through" : "none",
      color: this.props.todo.complete ? "red" : "black"
    };

    return <span style={style} onClick={this.onClick}>{this.props.todo.text}</span>;
  },

  onClick: function() {
    TodoActions.toggleTodo(this.props.todo) 
  }
});

module.exports = TodoItem;