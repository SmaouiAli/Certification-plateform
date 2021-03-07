const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://wajdidb:W@jdi123456@cerification-plateform.tgyfz.mongodb.net/certifDB?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("database connected")
});

module.exports = db
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://wajdidb:123456@cerification-plateform.tgyfz.mongodb.net/certifDB?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   console.log("database connected")
//   client.close();
// })