const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27027/ThoughtSpreads', {useNewUrlParser: true});

async function connectDB() {
  const db = mongoose.connection;
  return new Promise((resolve, reject)=>{
    db.on('error', function() {
      reject('mongodb connection error:');
    });
    db.once('open', function() {
      resolve();
    });
  })
}

// todo: when to close db

module.exports = {
  connectDB,
}