const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
// const static = require('koa-static');
// const send = require('koa-send');
const Router = require('koa-router');
const path = require('path');
const initDb = require('./db.js');
const initKoa = require('./koa.js');

Promise.all([
  initDb(),
  initKoa()
]).then(([ , app ])=>{
  app.listen(3000);
})