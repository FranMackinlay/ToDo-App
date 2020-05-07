angular.
  module('todoApp')
  .component('todoFormComponent', {
    templateUrl: './todo-form-component/todo-form-component.html',
    controller: function TodoFormController() {

      todoList.addTodo = function () {
        if (todoList.todoText) {
          todoList.todos.push({ text: todoList.todoText, done: false });
        }
        todoList.todoText = '';
      };

      todoList.archive = function () {
        const oldTodos = todoList.todos;
        todoList.todos = [];
        angular.forEach(oldTodos, function (todo) {
          if (!todo.done) todoList.todos.push(todo);
        });
      };
    }
  });
