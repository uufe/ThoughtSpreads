const Koa = require('koa');
// const static = require('koa-static');
// const send = require('koa-send');
const Router = require('koa-router');
const path = require('path');

const app = new Koa();


var router = new Router();
router
  .get('/ts/node/post', async (ctx, next) => {
  // .post('/ts/node', async (ctx, next) => {
    const ctl = require('./controller/node/insert.js');
    await ctl(ctx);
  })
  .get('/ts/node/del', async (ctx, next) => {
  // .del('/ts/node', async (ctx, next) => {
    const ctl = require('./controller/node/remove.js');
    await ctl(ctx);
  })
  .get('/ts/node/put', async (ctx, next) => {
  // .put('/ts/node', async (ctx, next) => {
    const ctl = require('./controller/node/modify.js');
    await ctl(ctx);
  })
  .get('/ts/node/get', async (ctx, next) => {
  // .get('/ts/node', async (ctx, next) => {
    const ctl = require('./controller/node/select.js');
    await ctl(ctx);
  })


app
  .use(router.routes())
  .use(router.allowedMethods());

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

app.listen(3000);




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