const base = require('./base.js');
const createSchema = base.createSchema;
const ObjectId = base.ObjectId;


module.exports = createSchema({
  source: ObjectId,
  target: ObjectId
});