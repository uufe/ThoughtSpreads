const dbbase = require('../../db/base.js');
const ObjectID = require('mongodb').ObjectID;

module.exports = async function(ctx) {
  const { id, name, desc, parentid } = ctx.query;
  
  const db = await dbbase.getDb();
  const node = db.collection('node');
  let res = await node.updateOne(
    { _id: ObjectID(id) },
    { $set: { name, desc, parentid } },
    { upsert: true }
  );
  
  debugger;

  if(res.modifiedCount === 1){
    ctx.body = { 
      errno: 0, 
      errmsg: 'ok'
    };
  } else {
    ctx.body = { 
      errno: -1, 
      errmsg: 'unhandled error'
    };
  }
  
  
}