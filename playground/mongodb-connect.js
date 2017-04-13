const {MongoClient, ObjectID} = require('mongodb');

// const objID = new ObjectID();
// console.log('Obj id test: ', objID);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) console.log(err);

  console.log('Connected to MongoDB server');

  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, res) => {
    if (err) console.log(err);

    // pretty print our saved document
    console.log('Saved to db', JSON.stringify(res.ops, undefined, 2));
    console.log('Saved to db at', JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
  });

  db.close();
});
