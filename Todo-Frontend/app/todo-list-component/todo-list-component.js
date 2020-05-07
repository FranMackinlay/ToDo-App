'use strict';

angular.module('todoApp').
  component('todoListComponent', {
    templateUrl: './todo-list-component/todo-list-component.html',
    controller: function TodoListController() {
      const todoList = this;
      todoList.todos = [
        { text: 'learn AngularJS', done: true, id: 1 },
        { text: 'build an AngularJS app', done: false, id: 2 }
      ];
    }
  });
