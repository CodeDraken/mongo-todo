const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) console.log(err);

  console.log('Connected to MongoDB server');

  // deleteMany
  db.collection('Todos').deleteMany({text: 'Something to do'}).then((res) => {
    console.log(res);
  });

  // deleteOne
  db.collection('Todos').deleteOne({text: 'Something to do'}).then((res) => {
    console.log(res);
  });

  // findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: true}).then((res) => {
    console.log(res);
  });

  //db.close();
});
