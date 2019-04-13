const mongoosebase = require('@root/db/connection.js');

module.exports = async function() {
  await mongoosebase.connectDB();
}