const mongoosebase = require('./db/connection.js');

module.exports = async function() {
  await mongoosebase.connectDB();
}