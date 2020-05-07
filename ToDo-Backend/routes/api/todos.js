
const express = require('express');
const router = express.Router();
const Todo = require('../../models/Todo');



router.get('/', async (req, res, next) => {
  try {

    const todoList = await Todo.list();

    if (todoList.length === 0) {
      res.status(404).json({ error: 'Todo not found' });
    } else {
      res.json(todoList);
    }
    module.exports = todoList;
  } catch (err) {
    next(err);
  }
});



router.post('/', async (req, res, next) => {
  try {
    const todoData = req.body;

    const newTodo = new Todo(todoData);

    await newTodo.save();

    res.status(201).json({ result: 'Ad created successfully', status: 201 });
  } catch (error) {
    next(error);
  }
});


router.delete('/:id', async (req, res, next) => {
  try {
    const _id = req.params.id;

    await Todo.deleteOne({ _id });

    res.json();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
