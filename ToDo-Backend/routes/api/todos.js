
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

    res.status(201).json({ result: 'Todo created successfully', status: 201 });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const _id = req.params.id;

    const todoUpdate = req.body;

    const updatedTodo = await Todo.findOneAndUpdate({ _id }, todoUpdate, {
      new: true,
      useFindAndModify: false,
    });

    res.json({ result: updatedTodo });
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const _id = req.params.id;

    await Todo.deleteOne({ _id });

    res.json({ result: 'Todo deleted succesfully' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
