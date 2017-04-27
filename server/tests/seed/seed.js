const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneID = new ObjectID();
const userTwoID = new ObjectID();
const testUsers = [
  {
    _id: userOneID,
    email: 'testuserone@example.com',
    password: 'testUserOnePass',
    tokens: [{
      access: 'auth',
      token: jwt.sign({_id: userOneID, access: 'auth'}, process.env.JWT_SECRET).toString()
    }]
  },
  {
    _id: userTwoID,
    email: 'testusertwo@example.com',
    password: 'testUserTwoPass',
    tokens: [{
      access: 'auth',
      token: jwt.sign({_id: userTwoID, access: 'auth'}, process.env.JWT_SECRET).toString()
    }]
  }
];

const testTodos = [
  {
    _id: new ObjectID(),
    text: 'first test todo',
    _creator: userOneID
  },
  {
    _id: new ObjectID(),
    text: 'second test todo',
    completed: true,
    completedAt: 123,
    _creator: userTwoID
  }
];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(testTodos);
  }).then(() => done());
};

const populateUsers = (done) => {
  User.remove({}).then(() => {
    let userOne = new User(testUsers[0]).save();
    let userTwo = new User(testUsers[1]).save();

    return Promise.all([userOne, userTwo]);
  }).then(() => done());
};

module.exports = {
  testTodos,
  populateTodos,
  testUsers,
  populateUsers
};
