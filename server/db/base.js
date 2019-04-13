

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const shareUtil = require('../../share/util.js');

// Connection URL
const url = 'mongodb://localhost:27027';
// Database Name
const dbName = 'new_db';
let db;

(async function() {
  const client = new MongoClient(url);

  try {
    // Use connect method to connect to the Server
    await client.connect();

    db = client.db(dbName);
  } catch (err) {
    console.log(err.stack);
  }

})();


async function getDb(){
  if(db){
    return db;
  } else {
    await shareUtil.sleep(100);
    return getDb();
  }
}

// todo: when to close db

module.exports = {
  getDb,
}