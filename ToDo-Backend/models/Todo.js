
const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  todo: String,
});

todoSchema.statics.list = function () {
  const query = Todo.find();
  return query.exec();
};


const Todo = mongoose.model('Todo', todoSchema);


module.exports = Todo;
