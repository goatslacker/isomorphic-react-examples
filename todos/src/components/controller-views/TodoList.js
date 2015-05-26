import React from 'react';
import TodoStore from '../../stores/TodoStore'
import TodoActions from '../../actions/TodoActions'
import TodoItem from '../todo-item'


let TodoList = React.createClass({

  propTypes: {
    todos: React.PropTypes.array.isRequired
  },

  changeTodoText(e) {
    TodoActions.changeTodoText(e.target.value);
  },

  submitTodo(e) {
    e.preventDefault();

    if (this.props.newTodoText.trim()) {
      TodoActions.addTodo()
      TodoActions.resetTodo()
    }
  },

  clearCompleteTodos(e) {
    TodoActions.clearCompleteTodos(location)
  },
  
  render() {

    return (

      <div>

        <h1>Todos</h1>
      
        <ul>
          { this.props.todos.map(function(todo, i) {
            return (
              <li key={i}>
                <TodoItem todo={todo} />
              </li>
            );
          }) 
          }
        </ul>

        <form onSubmit={this.submitTodo}>
          <input type="text" size="30" placeholder="New Todo"
                 value={this.props.newTodoText}
                 onChange={this.changeTodoText} />

          <input type="submit" value="Add Todo" />

        </form>

        <button onClick={this.clearCompleteTodos}>Clear Completed</button>

      </div>

    );
  }
});

module.exports = TodoList;