const dbbase = require('../../db/base.js');

module.exports = async function(ctx) {
  const { name, desc, parentid } = ctx.request.body;
  
  const db = await dbbase.getDb();
  const node = db.collection('node');
  let res = await node.insertOne({ name, desc, parentid, isdeleted: 0 });
  
  debugger;

  if(res.insertedCount === 1){
    ctx.body = {
      errno: 0,
      errmsg: 'ok',
      data: {
        newid: res.insertedId.toString()
      }
    };
  } else {
    ctx.body = { 
      errno: -1, 
      errmsg: 'unhandled error'
    };
  }
  
  
}