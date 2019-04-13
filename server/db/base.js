var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

function createSchema(obj) {
  return new mongoose.Schema(Object.assign{
    _id: ObjectId,
    is_delete: Number,
    create_time: String,
    update_time: String,
  });
}

module.exports = {
  createSchema,
  ObjectId
}