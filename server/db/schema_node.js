const createSchema = require('./base.js').createSchema;

module.exports = createSchema({
  name: String,
  desc: String
});