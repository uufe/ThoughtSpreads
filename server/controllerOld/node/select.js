const dbbase = require('../../db/base.js');

module.exports = async function(ctx) {
  const { name, desc, parentid } = ctx.query;
  
  const db = await dbbase.getDb();
  const node = db.collection('node');
  // let res = await node.insertOne({ name, desc, parentid, isdeleted: 0 });
  const res = await node.find({ isdeleted: 0 }).limit(1000).toArray();

  res.forEach(item=>{ 
    item.id = item._id.toString(); 
    delete item._id;
    delete item.isdeleted;
  })

  // debugger;

  // if(res.insertedCount === 1){
    ctx.body = {
      errno: 0,
      errmsg: 'ok',
      data: res
    };
  // } else {
  //   ctx.body = { 
  //     errno: -1, 
  //     errmsg: 'unhandled error'
  //   };
  // }
  
  
}