'use strict';

// Declare app level module which depends on views, and core components
angular.module('todoApp', [
  'ngRoute',
  'todoApp.view1',
  'todoApp.view2'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({ redirectTo: '/view1' });
}]);

angular.module('todoApp', [])
  .controller('TodoListController', function () {
    const todoList = this;
    todoList.todos = [
      { text: 'learn AngularJS', done: true, id: 1 },
      { text: 'build an AngularJS app', done: false, id: 2 }
    ];

    todoList.addTodo = function () {
      if (todoList.todoText) {
        todoList.todos.push({ text: todoList.todoText, done: false });
      }
      todoList.todoText = '';
    };

    todoList.remaining = function () {
      let count = 0;
      angular.forEach(todoList.todos, function (todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    todoList.archive = function () {
      const oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function (todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });
