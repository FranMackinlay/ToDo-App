'use strict';

const connection = require('./lib/connectMongoose');

const Todo = require('./models/Todo');

connection.once('open', async () => {
  try {
    await initTodos();
    connection.close();
  } catch (err) {
    console.error('An error happend:', err);
    process.exit(1);
  }
});

const initTodos = async () => {
  await Todo.deleteMany();
  await Todo.insertMany([
    {
      todo: "Make Coderhouse happy",
    },
    {
      todo: "Create Todo App",
    },
    {
      todo: "Submit Todo App",
    },
  ]);
};
