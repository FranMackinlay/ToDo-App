'use strict';

todoApp.component('todoListComponent',
  {
    templateUrl: './todo-list-component/todo-list-component.html',
    controller: function TodoFormController(todoListService) {
      const todoList = this;
      todoList.todos = [
        { text: 'learn AngularJS', done: true, id: 1 },
        { text: 'build an AngularJS app', done: false, id: 2 }
      ];

      todoListService.test()

      todoList.archive = function () {
        const oldTodos = todoList.todos;
        todoList.todos = [];
        angular.forEach(oldTodos, function (todo) {
          if (!todo.done) todoList.todos.push(todo);
        });
      };
    }

  });
