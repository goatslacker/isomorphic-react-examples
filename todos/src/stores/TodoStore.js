import alt from '../alt'
import TodoActions from '../actions/TodoActions'

class TodoStore {

  constructor() {

    this.todos = []
    this.newTodoText = ''

    this.bindListeners({
      changeTodoText: TodoActions.CHANGE_TODO_TEXT,
      addTodo: TodoActions.ADD_TODO,
      resetTodo: TodoActions.RESET_TODO,
      toggleTodo: TodoActions.TOGGLE_TODO,
      clearCompleteTodos: TodoActions.CLEAR_COMPLETE_TODOS
    });

  }

  changeTodoText(text) {
    this.newTodoText = text;
  }

  addTodo() {
    this.todos.push({text: this.newTodoText, complete: false});
  }

  resetTodo() {
    this.newTodoText = '';
  }

  toggleTodo(todo) {
    todo.complete = !todo.complete;
  }

  clearCompleteTodos() {
    this.todos = this.todos.filter(function(todo) {
      return !todo.complete;
    });
  }

}

module.exports = alt.createStore(TodoStore, 'TodoStore');