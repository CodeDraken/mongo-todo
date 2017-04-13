const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) console.log(err);

  console.log('Connected to MongoDB server');

  // get by value
  // db.collection('Todos').find({completed: true}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // get by id
  // db.collection('Todos').find({
  //   _id: new ObjectID('58efe5e76effd73a1d9a001e')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // count
  db.collection('Todos').find().count().then((count) => {
    console.log('Todos Count:', count);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  //db.close();
});
