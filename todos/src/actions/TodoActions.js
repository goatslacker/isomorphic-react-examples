import alt from '../alt'

class TodoActions {
  
  changeTodoText(text) {
    this.dispatch(text);
  }

  addTodo() {
    this.dispatch();
  }

  resetTodo() {
    this.dispatch();
  }

  toggleTodo(todo) {
    this.dispatch(todo);
  }

  clearCompleteTodos() {
    this.dispatch();
  }  

}

module.exports = alt.createActions(TodoActions);