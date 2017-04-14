const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) console.log(err);

  console.log('Connected to MongoDB server');

  // findOneAndUpdate
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('58efeddbc8d2be4400d5e6d6')
  }, {
    $set: {
      text: 'changed todo',
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  });

  //db.close();
});
