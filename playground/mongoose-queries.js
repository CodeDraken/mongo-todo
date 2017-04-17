const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const id = '58f4ec3ed777273387b59db4';

if (!ObjectID.isValid(id)) console.log('Invalid ID');

// no need to create new id with mongoose
Todo.find({_id: id}).then((todos) => {
  console.log('Todos: ', todos);
});

// finds first one that matches
Todo.findOne({_id: id}).then((todo) => {
  console.log('Todo: ', todo);
});

Todo.findById(id).then((todo) => {
  if (!todo) return console.log('ID not found!');
  console.log('Todo by ID: ', todo);
}).catch(e => console.log(e));
