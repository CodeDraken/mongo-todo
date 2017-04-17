let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test:test153@ds163010.mlab.com:63010/mongo-todo');
//mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
