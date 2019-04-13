const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
// const static = require('koa-static');
// const send = require('koa-send');
const Router = require('koa-router');
const path = require('path');
const initDb = require('./db/index.js');
const initKoa = require('./db/koa.js');


require('../util/global.js');

Promise.all([initDb(), initKoa()]).then(([, app])=>{
  app.listen(3000);
})




// var dbbase = require('./db/base.js');




// (async function() {
//   const db = await dbbase.getDb();
//   debugger;

//   // Get the collection
//   const col = db.collection('find');

//   // // Insert multiple documents
//   // const r = await col.insertMany([{a:1}, {a:1}, {a:1}]);
//   // assert.equal(3, r.insertedCount);

//   // Get the cursor
//   const docs = await col.find({a:1}).limit(2).toArray();
//   debugger;

// }())

console.log('x23456');